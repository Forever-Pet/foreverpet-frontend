import { useState } from "react";

import { debounce } from "lodash";

// CSS
import styles from "../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

// Components
import LocalAuthUserHeader from "./HeaderTitle/LocalAuthUserHeader";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import Title from "../../../common/Title/Title";
import KakaoAuthUserAccount from "../Kakao/KakaoAuthUserAccount";
import NaverAuthUserAccount from "../Naver/NaverAuthUserAccount";
import GoogleAuthUserAccount from "../Google/GoogleAuthUserAccount";

const LocalAuthUserLogin = () => {
  const [authUserLoginInput, setAuthUserLoginInput] = useState({
    email: "",
    password: "",
  });

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
  const sendLoginUserInfomation = (e) => {
    const { email, password } = authUserLoginInput;
    e.preventDefault();
    console.log(email.trim().length);
    console.log("로그인 성공");
    // 로그인 정보 백엔드로 API 통신
  };

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
            <span>회원가입</span>
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
