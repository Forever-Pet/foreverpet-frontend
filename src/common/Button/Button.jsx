// CSS
import styles from "../../styles/css/commons/Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      id={styles[props.id || ""]}
      className={styles[props.className || ""]}
    >
      {props.title}
    </button>
  );
};

export default Button;
