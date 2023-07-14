// CSS
import styles from "../../../styles/css/components/Auth/SNS/SNS.module.css";

const KakaoAuthUserAccount = () => {
  const kakaoFunc = () => console.log("카카오 로그인 인증");

  return <div className={styles["kakao-login-icon"]} onClick={kakaoFunc}></div>;
};

export default KakaoAuthUserAccount;
