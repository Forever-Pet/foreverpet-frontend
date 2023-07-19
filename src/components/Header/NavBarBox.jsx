import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


//css
import styles from '../../styles/css/pages/NavBarBox.module.css';

//icon
import { BiUser ,BiBasket } from "react-icons/bi";
import { GoSearch} from "react-icons/go";
import Input from '../../common/Input/Input';

//상품 검색 기능 구현 
/*const filterTitle = products.filter((p) => {
  return
});*/


//헤더 - 상품검색,마이페이지,장바구니
const NavBarBox = () => {
  // const [search , setSearch] = useState("");
  // const onChange = (e) => {
  //   setSearch(e.target.value)
  // }

  return (
    <div>
    <nav className={styles.navbar_box}>
      <div>
        <Input type="text" placeholder="우리 댕냥 알러지 없는 사료" className="searchInput" />
         {/* <input type="text" value={search} onChange={onChange} className={styles.search}  /> */}
         <GoSearch className={`${styles.navbar_box_icon} ${styles.icon1}`} />
      </div>
      <div>
        <NavLink to="/mypage" className={styles.navbar_box_icon}>
          <BiUser/>
        </NavLink>
      </div>
      <div>
        <NavLink to="/order" className={styles.navbar_box_icon}>
          <BiBasket/> 
        </NavLink>
      </div>
      
    </nav>
  </div>
  );
};

export default NavBarBox;