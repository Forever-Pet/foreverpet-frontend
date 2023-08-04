// CSS
import styles from "../../styles/css/pages/User/Login.module.css";

// Components
import LocalAuthUserLogin from "../../components/Auth/Local/LocalAuthUserLogin";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className={styles["login-wrap"]}>
        <LocalAuthUserLogin />
      </div>
      <Footer />
    </>
  );
};

export default Login;
