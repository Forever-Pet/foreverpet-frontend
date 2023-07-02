import classes from "../../styles/css/components/Footer/Footer.module.css"

const Footer = (props) => {
  return <footer className={classes[props.className || ""]}>푸터임</footer>;
};

export default Footer;
