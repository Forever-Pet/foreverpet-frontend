import { useRef, useState } from "react";
import NavBarBox from "./NavBarBox";
import TopMenu from "./TopMenu"; 
import NavBar from "./NavBar";
import { useWindowScroll} from '@uidotdev/usehooks';
// CSS 
import styles from "../../styles/css/components/Header/header.module.css";

//icon 
import { RxCross2 } from "react-icons/rx";
import { useEffect } from "react";

//스크롤 내리면 헤더 안보이게 
//ES6 바꾸기 ,엑스 클릭 , 모달 컴포넌트 폴더 따로 만들어서 설정 
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_text}>포에버펫 회원가입하고 첫 구매 혜택과 쿠폰 받아가세요!
  
      </div>
    </div>
  );
};

//헤더 스크롤 핸들러
const Header = (props) => {
  //상단베너
  const [banner, setBanner] =useState(true);
  const DeleteBan = () => {
    setBanner(false);
  }
  
  //스크롤 헤더 값 변경

  return (
    <header className={styles.header} visible={visible} >
    <div>
    <RxCross2 onClick = {() => {DeleteBan(!banner)}} className={styles.icon} />
    {banner && <Banner/>}
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
  );
};

export default Header;
