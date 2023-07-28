import styles from "../../../styles/css/components/Auth/SNS/SNS.module.css";

const GoogleAuthUserAccount = () => {
  const googleFunc = () => console.log("구글 로그인 인증");
  return (
    <div className={styles["google-login-icon"]} onClick={googleFunc}></div>
  );
};

export default GoogleAuthUserAccount;
