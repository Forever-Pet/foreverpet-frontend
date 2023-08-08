// Compoennts
import TopMenu from "./TopMenu";
import NavBar from "./NavBar";
import Title from "../../common/Title/Title";
import HeaderBanner from "../Banner/HeaderBanner";


// CSS
import styles from "../../styles/css/components/Header/Header.module.css";



const Header = () => {

  return (
    <>
      <HeaderBanner />
      <header className={styles.header}>
        <TopMenu />
        <div className={styles.header_logo}>
          <Title title="포에버펫" className="logo_text" />
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
