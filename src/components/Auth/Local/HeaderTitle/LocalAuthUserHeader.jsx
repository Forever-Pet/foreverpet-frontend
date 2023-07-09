// CSS
import styles from "../../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

import Title from "../../../../common/Title/Title";
import { AiOutlineClose } from "react-icons/ai";

const LocalAuthUserHeader = () => {
  return (
    <div className={styles["localUser-join__header"]}>
      <div className={styles["localUser-join__header--closeBtn"]}>
        <AiOutlineClose className={styles["localUser-join__header--btn"]} />
      </div>
      <Title title="회원가입" className="localUser-join__header--title" />
    </div>
  );
};

export default LocalAuthUserHeader;
