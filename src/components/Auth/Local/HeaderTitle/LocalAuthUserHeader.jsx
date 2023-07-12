// CSS
import styles from "../../../../styles/css/components/Auth/Local/LocalAuthUser.module.css";

// Components
import Title from "../../../../common/Title/Title";
import { AiOutlineClose } from "react-icons/ai";

const LocalAuthUserHeader = (props) => {
  return (
    <div className={styles["localUser-auth__header"]}>
      <div className={styles["localUser-auth__header--closeBtn"]}>
        <AiOutlineClose className={styles["localUser-auth__header--btn"]} />
      </div>
      <Title title={props.title} className="localUser-auth__header--title" />
    </div>
  );
};

export default LocalAuthUserHeader;
