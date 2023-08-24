// CSS
import { forwardRef } from "react";
import styles from "../../styles/css/commons/Input.module.css";

const Input = forwardRef((props, ref) => {
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
      onKeyDown={props.onKeyDown}
      required={props.required ? props.required : false}
      disabled={props.disabled ? props.disabled : false}
      ref={ref}
    />
  );
});

export default Input;
