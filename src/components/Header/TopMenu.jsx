import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//css
import styles from "../../styles/css/pages/TopMenu.module.css";
import { Link } from "react-router-dom";
import { removeToken } from "../../store/Slice/localAuthSlice";

//헤더 - 회원가입,로그인,주문내역
const TopMenu = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const selectTopHandler = (menu) => {
    if (menu === "로그아웃") {
      dispatch(removeToken());
      setIsLogin(false);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("auth");
    if (token != null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const logoutTopMenu = [
    { id: 0, name: "회원가입", url: "/user/join" },
    { id: 1, name: "로그인", url: "/user/login" },
  ];

  const loginTopMenu = [
    { id: 0, name: "로그아웃", url: "/" },
    { id: 1, name: "주문내역", url: "/member/modify/delivery" },
  ];

  if (isLogin) {
    return (
      <div>
        <div className={styles.top_menu}>
          {loginTopMenu.map((d) => {
            return (
              <Link
                to={d.url}
                key={d.id}
                className={styles.top_menu_prd}
                onClick={() => {
                  selectTopHandler(d.name);
                }}
              >
                {d.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.top_menu}>
        {logoutTopMenu.map((d) => {
          return (
            <Link
              to={d.url}
              key={d.id}
              className={styles.top_menu_prd}
              onClick={() => {
                selectTopHandler(d.name);
              }}
            >
              {d.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopMenu;
