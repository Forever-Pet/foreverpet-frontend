import { useState } from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import NavBar from "./NavBar";
import NavBarSide from "./NavBarSide";

// CSS
import styles from "../../styles/css/components/Header/header.module.css"

//icon 
import { RxCross2 } from "react-icons/rx";


function Modal () {
  return (
    <>
    <div className={styles.banner}>
      <p>포에버펫 회원가입하고 첫 구매 혜택과 쿠폰 받아가세요!</p>
    </div>
    </>
  )
}

const Header = (props) => {
  let [modal, setModal] =useState(false);
  return (
    <header className={styles.header}>
      <Modal>
        <button onClick={() => { setModal(!modal);}}>
          <RxCross2 className={styles.icon}/>
        </button>
      </Modal>
      <div className={styles.contents}>
        <div className={styles.logo}>
           포에버펫
        </div>
        <Categories/>
        <NavBar/>
        <Banner/>
      </div>

    </header>
  );
};

export default Header;
