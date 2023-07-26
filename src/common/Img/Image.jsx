import classes from "../../styles/css/commons/Image.module.css";

const Image = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={classes[props.className || ""]}
    />
  );
};

export default Image;
