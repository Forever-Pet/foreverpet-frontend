import { useState } from "react";

import { debounce } from "lodash";

import axios from "axios";

//Redux
import { useDispatch } from "react-redux";
import { addToken, removeToken } from "../../../store/Slice/localAuthSlice";

// CSS
import styles from "../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

// Hooks
import usePathMove from "../../../hooks/usePathMove";
import useLocalAuthSignUp from "../../../hooks/useLocalAuthSignUp";

// Components
import LocalAuthUserHeader from "./HeaderTitle/LocalAuthUserHeader";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import Title from "../../../common/Title/Title";
import KakaoAuthUserAccount from "../Kakao/KakaoAuthUserAccount";
import NaverAuthUserAccount from "../Naver/NaverAuthUserAccount";
import GoogleAuthUserAccount from "../Google/GoogleAuthUserAccount";
import { useEffect } from "react";

const LocalAuthUserLogin = () => {
  const pathMove = usePathMove();
  const dispatch = useDispatch();
  const [responsive, authSignUp] = useLocalAuthSignUp();
  const [authUserLoginInput, setAuthUserLoginInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (responsive !== null) {
      dispatch(addToken(responsive));
      pathMove("/");
    }
  }, [responsive]);
  // // Debounce Func
  const debounceInputValueFunc = (e) => {
    const { name, value } = e.target;
    // Input Value Set
    setAuthUserLoginInput((prevLoginInput) => ({
      ...prevLoginInput,
      [name]: value,
    }));
    console.log(authUserLoginInput);
  };

  // Debounce Set
  const getInputValueInfo = debounce(debounceInputValueFunc, 300);

  // 로그인 정보 전송
  const sendLoginUserInfomation = async (e) => {
    const { email, password } = authUserLoginInput;
    e.preventDefault();

    const bodyData = {
      userEmail: email,
      userPassword: password,
    };
    // 비동기 코드 수정 예정
    authSignUp("user/login", bodyData); // authSignUp 함수 호출
    dispatch(addToken(responsive));
  };

  // 회원가입 경로로 이동함수
  const joinPathMoveBtn = () => pathMove("/user/join");

  return (
    <>
      <LocalAuthUserHeader title="로그인" />
      <form
        className={styles["localUser-login__form"]}
        onSubmit={sendLoginUserInfomation}
      >
        <Input
          type="text"
          placeholder="이메일을 입력해주세요."
          className="localUser-login__email"
          name="email"
          onChange={getInputValueInfo}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          className="localUser-login__password"
          name="password"
          onChange={getInputValueInfo}
        />
        <div className={styles["localUser-login__bottom-section"]}>
          <div className={styles["localUser-login__save-account"]}>
            <Input type="checkbox" id="save-acocunt" />
            <label htmlFor="save-acocunt">아이디 저장</label>
          </div>
          <div className={styles["localUser-login__recovery-section"]}>
            <span onClick={joinPathMoveBtn}>회원가입</span>
            <span>아이디 / 비밀번호 찾기</span>
          </div>
        </div>
        <Button
          type="submit"
          title="로그인"
          className="localUser-login__footer-btn"
          onClick={sendLoginUserInfomation}
        />
      </form>
      <div className={styles["localUser-login__sns-list"]}>
        <Title
          title="SNS 계정으로 로그인"
          className="localUser-login__sns-title"
        />
        <div className={styles["localUser-login_sns"]}>
          <KakaoAuthUserAccount />
          <NaverAuthUserAccount />
          <GoogleAuthUserAccount />
        </div>
      </div>
    </>
  );
};

export default LocalAuthUserLogin;
