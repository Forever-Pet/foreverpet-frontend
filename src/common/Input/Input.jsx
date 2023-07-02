// CSS
import classes from "../../styles/css/commons/Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      className={classes[props.className || ""]}
      minLength={props.minLength}
      maxLength={props.maxLength}
      onChange={props.onChange}
    />
  );
};

export default Input;
