// CSS
import classes from "../../styles/css/commons/Title.module.css";

const Title = (props) => {
  return <div className={classes[props.className | ""]}>{props.title}</div>;
};

export default Title;
