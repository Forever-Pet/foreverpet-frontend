import styles from "../../styles/css/pages/User/Login.module.css";

import LocalAuthUserLogin from "../../components/Auth/Local/LocalAuthUserLogin";

const Login = () => {
  return (
    <>
      <div className={styles["header_test"]}>헤더임</div>
      <div className={styles["login-wrap"]}>
        <LocalAuthUserLogin />
      </div>
    </>
  );
};

export default Login;
