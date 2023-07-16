import styles from "../../styles/css/commons/Image.module.css";

const Image = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={styles[props.className || ""]}
    />
  );
};

export default Image;
