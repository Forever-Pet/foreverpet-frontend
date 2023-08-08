// CSS
import styles from "../../styles/css/pages/User/Login.module.css";

// Components
import LocalAuthUserJoin from "../../components/Auth/Local/LocalAuthUserJoin";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Join = () => {
  return (
    <>
      <Header />
      <div className={styles["login-wrap"]}>
        <LocalAuthUserJoin />
      </div>
      <Footer />
    </>
  );
};

export default Join;
