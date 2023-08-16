// Compoennts
import TopMenu from "./TopMenu";
import NavBar from "./NavBar";
import Title from "../../common/Title/Title";
import HeaderBanner from "../Banner/HeaderBanner";

// CSS
import styles from "../../styles/css/components/Header/Header.module.css";
import usePathMove from "../../hooks/usePathMove";

const Header = () => {
  const pathMove = usePathMove();
  const homePathMove = () => pathMove("/");

  return (
    <>
      <HeaderBanner />
      <header className={styles.header}>
        <TopMenu />
        <div className={styles.header_logo} onClick={homePathMove}>
          <Title title="포에버펫" className="logo_text" />
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
