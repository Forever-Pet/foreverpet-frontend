
//css
import Title from "../../common/Title/Title";
import styles from "../../styles/css/components/Footer/Footer.module.css"



const Footer = (props) => {
  return (//<footer className={classes[props.className || ""]}> 
  <footer className={styles.footer}>
    <div className={styles.footer_logo}>
     <Title title='포에버펫' className='logo_text'/>
    </div>
      <div className={styles.footer_contents}>
        <div>포에버펫 소개</div>
        <div>공지사항</div>
        <div>고객센터</div>
        <div>이용약관</div>
        <div>개인정보처리방침</div>
      </div>

    <div className={styles.footer_desccontainer}>
         COPYRIGHT © 2023 포에버펫 . ALL RIGHTS RESERVED.
    </div>
</footer>
//</footer>;
  );
};

export default Footer;
