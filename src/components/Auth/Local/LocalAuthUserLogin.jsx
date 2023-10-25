// React Hook
import { useState, useEffect } from "react";

// Custom Hooks
import usePathMove from "../../../hooks/usePathMove";
import useLocalAuthSignUp from "../../../hooks/useLocalAuthSignUp";

//Redux
import { useDispatch } from "react-redux";
import { addToken } from "../../../store/Slice/localAuthSlice";

// CSS
import styles from "../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

// Components
import LocalAuthUserHeader from "./HeaderTitle/LocalAuthUserHeader";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import Title from "../../../common/Title/Title";
import KakaoAuthUserAccount from "../Kakao/KakaoAuthUserAccount";

const LocalAuthUserLogin = () => {
  const pathMove = usePathMove();
  const dispatch = useDispatch();
  const [responsive, authSignUp] = useLocalAuthSignUp();
  const [authUserLoginInput, setAuthUserLoginInput] = useState({
    email: "",
    password: "",
  });
  const [saveUserid, setSaveUserId] = useState(false);

  useEffect(() => {
    if (responsive !== null) {
      dispatch(addToken(responsive));
      pathMove("/");
    }
  }, [responsive]);

  useEffect(() => {
    const saveUserId = localStorage.getItem("saveid");
    if (saveUserId !== null) {
      setAuthUserLoginInput((prev) => ({
        ...prev,
        email: JSON.parse(saveUserId),
      }));
      setSaveUserId(true);
    }
  }, []);

  const getInputValueInfo = (e) => {
    const { name, value } = e.target;
    // Input Value Set
    setAuthUserLoginInput((prevLoginInput) => ({
      ...prevLoginInput,
      [name]: value,
    }));
  };

  // 로그인 정보 전송
  const sendLoginUserInfomation = async (e) => {
    const { email, password } = authUserLoginInput;
    e.preventDefault();

    if (email.trim().length === 0) return alert("이메일을 입력 해주세요");
    if (password.trim().length === 0) return alert("비밀번호를 입력 해주세요");

    const bodyData = {
      userEmail: email,
      userPassword: password,
    };

    // 비동기 코드 수정 예정
    authSignUp("user/login", bodyData); // authSignUp 함수 호출
    dispatch(addToken(responsive));
    if (saveUserid === true)
      return localStorage.setItem(
        "saveid",
        JSON.stringify(authUserLoginInput.email)
      );
  };

  const saveUserAuthId = () => setSaveUserId((prev) => !prev);

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
          value={authUserLoginInput.email}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          className="localUser-login__password"
          name="password"
          onChange={getInputValueInfo}
        />
        <div className={styles["localUser-login__bottom-section"]}>
          <div
            className={styles["localUser-login__save-account"]}
            onClick={saveUserAuthId}
          >
            <Input type="checkbox" />
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
        </div>
      </div>
    </>
  );
};

export default LocalAuthUserLogin;
