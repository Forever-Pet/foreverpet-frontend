// CSS
import styles from "../../styles/css/commons/DefaultModal.module.css";

const DefaultModal = (props) => {
  return (
    <div className={styles["modal-background"]}>
      <div className={styles[props.className || ""]}>{props.children}</div>
    </div>
  );
};

export default DefaultModal;
