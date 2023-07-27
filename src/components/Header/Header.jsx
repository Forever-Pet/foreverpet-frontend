
import TopMenu from "./TopMenu";
import NavBar from "./NavBar";

// CSS
import styles from "../../styles/css/components/Header/Header.module.css";
import HeaderBan from "../Banner/HeaderBan";

//간식 누른거의 데이터와 props 로 엘라님 컴포넌트 전달 해 주기

//스크롤 헤더 값 변경 구현 예정
//헤더 스크롤 핸들러
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
