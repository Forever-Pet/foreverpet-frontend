
// Compoennts
import TopMenu from "./TopMenu";
import NavBar from "./NavBar";
import Title from "../../common/Title/Title";

// CSS
import styles from "../../styles/css/components/Header/Header.module.css";
import HeaderBan from "../Banner/HeaderBan";

const Header = (props) => {
  return (
    <>
    <HeaderBan/>
    <header className={styles.header}>
      <TopMenu />
      <div className={styles.header_logo}>
        <Title title='포에버펫' className='header_logo_text'/>
      </div>
      <NavBar />
    </header>
    </>
  );
};

export default Header;
