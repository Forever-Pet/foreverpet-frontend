import styles from "../../styles/css/pages/User/Login.module.css";

import LocalAuthUserJoin from "../../components/Auth/Local/LocalAuthUserJoin";

const Join = () => {
  return (
    <>
      <div className={styles["header_test"]}>헤더임</div>
      <div className={styles["login-wrap"]}>
        <LocalAuthUserJoin />
      </div>
    </>
  );
};

export default Join;
