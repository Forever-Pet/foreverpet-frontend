import TopMenu from "./TopMenu";
import NavBar from "./NavBar";

// CSS
import styles from "../../styles/css/components/Header/Header.module.css";
import HeaderBan from "../Banner/HeaderBan";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <HeaderBan/>
      <TopMenu />
      <div className={styles.logo}>
        <div className={styles.logo_text}>포에버펫</div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
