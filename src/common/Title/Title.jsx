// CSS
import styles from "../../styles/css/commons/Title.module.css";

const Title = (props) => {
  return <div className={styles[props.className]}>{props.title}</div>;
};

export default Title;
