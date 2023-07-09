import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarSide from './NavBarSide';

//icon

//css
import styles from '../../styles/css/pages/NavBar.module.css';



const NavBar = () => {
  return (
    <div>
      <nav className={styles.nav}>
      <NavBarSide width={184}/>
        <div className={`${styles.tabmenu} ${styles.tabmenu1}`}>
          전체 카테고리
        </div>
        <div>
          <NavLink to="/login" className={styles.tabmenu}>
             기획전
          </NavLink>
        </div>
        <div>
          <NavLink to="/order" className={styles.tabmenu}>
             이벤트
          </NavLink>
        </div>
        <div>
          <NavLink to="/customer" className={styles.tabmenu}>
             쿠폰
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;