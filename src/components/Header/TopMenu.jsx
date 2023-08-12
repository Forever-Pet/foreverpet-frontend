import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//css
import styles from '../../styles/css/pages/TopMenu.module.css';
import { Link } from 'react-router-dom';
import { removeToken } from '../../store/Slice/localAuthSlice';

//헤더 - 회원가입,로그인,주문내역 
const TopMenu = () => {
  const [currentTab , setTab] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

   const selectTopHandler = (index, menuName) => {
     setTab(index);
      if(menuName === "로그아웃"){
       dispatch(removeToken());
      }
    };

   useEffect(()=>{
      setIsLogin(sessionStorage.getItem("auth"));

   }, []);

   const logoutTopMenu = [
    {id: 0 ,name: '회원가입' , url: '/user/join'},
    {id: 1 ,name: '로그인' , url: '/user/login'}
  ];

  const loginTopMenu = [
    {id: 0 ,name: '로그아웃' , url: '/user/login'},
    {id: 1 ,name: '주문내역' , url: '/member/order'}
  ];

  
if(isLogin){
  return (
    <div>
      <div className={styles.top_menu}>
          {loginTopMenu.map((d) => {
            return(
              <Link to={d.url} key={d.id} className={styles.top_menu_prd} onClick={() => selectTopHandler(index, d.name)}> {d.name}</Link>
            )
          })}
      </div>
    </div>
  );
}
  return (
    <div>
      <div className={styles.top_menu}>
          {logoutTopMenu.map((d) => {
            return(
              <Link to={d.url} key={d.id} className={styles.top_menu_prd} onClick={() => selectTopHandler(index)}> {d.name}</Link>
            )
          })}
      </div>
    </div>
  );
};

export default TopMenu;

