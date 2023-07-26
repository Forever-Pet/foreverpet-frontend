import styles from "../../../styles/css/components/Auth/SNS/SNS.module.css";

const NaverAuthUserAccount = () => {
  const naverFunc = () => console.log("네이버 로그인 인증");
  return <div className={styles["naver-login-icon"]} onClick={naverFunc}></div>;
};

export default NaverAuthUserAccount;
