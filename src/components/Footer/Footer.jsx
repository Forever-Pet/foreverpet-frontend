
//css
import styles from "../../styles/css/components/Footer/Footer.module.css"

const Footer = (props) => {
  return (//<footer className={classes[props.className || ""]}> 
  <footer className={styles.footer}>
    <h2 className={styles.fot_logo}>
      포에버펫
    </h2>
      <div className={styles.contents}>
        <div>포에버펫 소개</div>
        <div>공지사항</div>
        <div>고객센터</div>
        <div>이용약관</div>
        <div>개인정보처리방침</div>
      </div>

    <div className={styles.desccontainer}>
         COPYRIGHT © 2023 포에버펫 . ALL RIGHTS RESERVED.
    </div>
</footer>
//</footer>;
  );
};

export default Footer;
