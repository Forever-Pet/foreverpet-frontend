import { useState } from "react";
import NavBarBox from "./NavBarBox";
import TopMenu from "./TopMenu";
import NavBar from "./NavBar";

// CSS
import styles from "../../styles/css/components/Header/header.module.css"

//icon 
import { RxCross2 } from "react-icons/rx";

function Modal () {
  return (
    <>
    <div className={styles.banner}>
      <p>포에버펫 회원가입하고 첫 구매 혜택과 쿠폰 받아가세요!
      <RxCross2  className={styles.icon} /> 
      </p>
    </div>
    </>
  )
}

const Header = (props) => {
  let [modal, setModal] =useState(true);
  
  return (
    <>
    <header className={styles.header}>
    <div onClick = {() => {setModal(!modal)}}>
         {modal && <Modal/>}
    </div>
      <div className={styles.contents}>
        <div className={styles.logo}>
           포에버펫
        </div>
        
      </div>
      <TopMenu/>
      <NavBar/>
       <NavBarBox/>
    </header>
    </>
   
  );
};

export default Header;
