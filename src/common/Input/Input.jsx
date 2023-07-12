// CSS
import styles from "../../styles/css/commons/Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      className={styles[props.className || ""]}
      value={props.value}
      name={props.name}
      minLength={props.minLength}
      maxLength={props.maxLength}
      onChange={props.onChange}
      required={props.required ? props.required : false}
      disabled={props.disabled ? props.disabled : false}
    />
  );
};

export default Input;
