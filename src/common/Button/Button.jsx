// CSS
import classes from "../../styles/css/commons/Button.module.css"

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      id={classes[props.id || ""]}
      className={classes[props.className || ""]}
    >
      {props.title}
    </button>
  );
};


export default Button