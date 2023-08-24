// CSS
import styles from "../../../styles/css/components/Auth/SNS/SNS.module.css";

const KakaoAuthUserAccount = () => {
  const CLIENT_ID = "a6bfe93b460dd365f9951854df478ab9";
  const REDIRECT_URL =
    "http://ec2-13-209-75-154.ap-northeast-2.compute.amazonaws.com:3000/oauth/kakaoCallback";
  const URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  return (
    <div
      className={styles["kakao-login-icon"]}
      onClick={() => (window.location.href = URL)}
    ></div>
  );
};

export default KakaoAuthUserAccount;
