import { useState } from "react";

import axios from "axios";

// Event Debounce
import { debounce } from "lodash";

// CSS
import styles from "../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

// Hooks
import usePathMove from "../../../hooks/usePathMove";

// Components
import DaumAddress from "../Address/DaumAddress";
import Button from "../../../common/Button/Button";
import LocalAuthUserHeader from "./HeaderTitle/LocalAuthUserHeader";
import AuthInputList from "./AuthInputList/AuthInputList";

// Error MSG
import { MSG } from "../../../lang/Message";

const LocalAuthUserJoin = () => {
  const pathMove = usePathMove();
  const [userAddressInfo, setUserAddressInfo] = useState(false);
  const [enableEmailAuth, setEnableEmailAuth] = useState(false);
  const [emailOverlap, setEmailOverap] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [successEmailAuthCode, setSuccessEmailAuthCode] = useState(false);
  const [localAuthUserInput, setLocalAuthUserInput] = useState({
    name: "",
    email: "",
    // emailAuth: "",
    password: "",
    password2: "",
    tel: "",
    mainAddress: "",
    subAddress: "",
    zonecode: "",
  });

  // Debounce Func
  const debounceInputValueFunc = (e) => {
    const { name, value } = e.target;

    // Input Value Set
    setLocalAuthUserInput((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
    return setErrorMessage("");
  };

  // Debounce Set
  const getInputValueInfo = debounce(debounceInputValueFunc, 300);

  // DaumAddress 컴포넌트 활성화, 클릭한 주소정보 Get
  const userAddressInfoUpdate = (type, address) => {
    if (type === "modal") return setUserAddressInfo((prev) => !prev);
    if (type === "address") {
      const { value, zonecode } = address.target;
      return setLocalAuthUserInput((prev) => ({
        ...prev,
        mainAddress: value,
        zonecode,
      }));
    }
  };

  // Input의 주소검색 버튼 누를시 DaumAddress 컴포넌트 활성화
  const getUserMainAddressInfo = () => setUserAddressInfo((prev) => !prev);

  // 입력한 이메일 서버중복검증 확인
  const checkEmailAuth = async () => {
    const { email } = localAuthUserInput;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // 정규 표현식을 사용하여 이메일 형식 검사
    // if (isValid) return setEnableEmailAuth((prev) => !prev);
    if (!isValid) return alert("이메일을 입력 해주세요");
    const API_URL = `${import.meta.env.VITE_API_BASE_URL}/user/emailCheck`;
    const data = {
      userEmail: email,
    };
    const res = await axios.post(API_URL, data);
    if (!res.data) {
      // 현재 누군가가 이메일을 사용중이라면 EMAIL_ONLY_USED
      alert(MSG.JOIN.EMAIL_ONLY_USED);
      return setErrorMessage(MSG.JOIN.EMAIL_ONLY_USED);
    }
    setEmailOverap(true);
    return alert("해당 이메일 사용 가능합니다.");
  };

  // 회원가입 정보전송
  const registerLocalUserAuth = (e) => {
    const { name, email, tel, password, password2 } = localAuthUserInput;
    e.preventDefault();

    if (name.length === 0) return setErrorMessage(MSG.JOIN.NAME_FAIL);
    if (email.length === 0) return setErrorMessage(MSG.JOIN.EMAIL_FAIL);
    if (tel.length < 8) return setErrorMessage(MSG.JOIN.TEL_FAIL);
    if (password !== password2) return setErrorMessage(MSG.JOIN.PASSWORD_FAIL);
    if (emailOverlap === false) return alert("이메일 중복 검증을 눌러주세요");

    // 회원정보 서버로 전송
    registerLocalUserAuthCallback();
  };

  const registerLocalUserAuthCallback = async () => {
    const { name, email, password, tel, mainAddress, subAddress, zonecode } =
      localAuthUserInput;

    const address = {
      city: mainAddress,
      street: subAddress,
      zipcode: zonecode,
    };

    const bodyData = {
      userNickName: name,
      userEmail: email,
      userPassword: password,
      userPhone: tel,
      userAddress: address,
    };

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/user/signup`,
      bodyData
    );
    if (res.data) {
      alert("회원가입이 완료 되었습니다.");
      pathMove("/");
    }
  };

  // 로그인 경로로 이동함수
  const loginPathMoveBtn = () => pathMove("/user/login");

  const SHOW = styles[""];
  const HIDE = styles["localUser-join__itemList-hidden"];

  // 메인주소 입력시, 서브주소 입력 활성화
  const subEmailStye = localAuthUserInput.mainAddress.length > 1 ? SHOW : HIDE;

  // 이메일 중복확인 후 인증 동적 활성화 렌더링 (인증기능 추가 예정)
  // const emailAuth = enableEmailAuth ? SHOW : HIDE;

  // 이메일 인증 통과 (승인번호 기능 추가 예정)
  // const getAuthEmailCode = () => {
  //   if (localAuthUserInput.emailAuth.length === 0)
  //     return setErrorMessage(MSG.JOIN.EMAIL_AUTH_VALUE);
  //   // 만약 인증번호가 불일치 하다면 EMAIL_AUTH_WRONG
  //   setSuccessEmailAuthCode(true);
  // };

  return (
    <>
      {userAddressInfo && (
        <DaumAddress
          userAddressInfo={userAddressInfo}
          userAddressInfoUpdate={userAddressInfoUpdate}
        />
      )}
      <LocalAuthUserHeader title="회원가입" />

      <form
        className={styles["localUser-join__form"]}
        onSubmit={registerLocalUserAuth}
      >
        <AuthInputList
          subEmailStye={subEmailStye}
          localAuthUserInput={localAuthUserInput}
          checkEmailAuth={checkEmailAuth}
          getUserMainAddressInfo={getUserMainAddressInfo}
          getInputValueInfo={getInputValueInfo}
        />
        {errorMessage && (
          <div className={styles["localUser-join__error"]}>{errorMessage}</div>
        )}
        <div className={styles["localUser-join__footer"]}>
          <Button
            title="회원가입"
            className="localUser-join__footer-btn"
            type="submit"
            onClick={registerLocalUserAuth}
          />
          <div className={styles["localUser-join__footer-box"]}>
            <span className={styles["localUser-join__footer-existingAccount"]}>
              이미 아이디가 있으신가요?
            </span>
            <span
              className={styles["localUser-join__footer-login"]}
              onClick={loginPathMoveBtn}
            >
              로그인
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default LocalAuthUserJoin;
