// CSS
import classes from "../../styles/css/commons/Title.module.css";

const Title = (props) => {
  return <div className={classes[props.className | "banner_text"]}>{props.title}</div>;
};

export default Title;
