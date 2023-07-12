import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//css
import styles from '../../styles/css/pages/NavBar.module.css';

//icon
import { RxCross2 , RxTextAlignJustify } from "react-icons/rx";

//nav list 
function NavList () {
  return (
    <div className={styles.nav_list}>
      <img className={styles.img1} alt='feed' src='img/img-4-1.jpeg'/>
      <NavLink to="/feed" className={styles.nav_list_item}> 사료 </NavLink>
     
      <img className={styles.img1} alt='Snack' src='img/img-5-1.jpeg'/>
      <NavLink to="/Snack" className={styles.nav_list_item}>간식</NavLink>

      <img className={styles.img1} alt='Fashion' src='img/img-6-1.jpeg'/>
      <NavLink to="/Fashion" className={styles.nav_list_item}>패션</NavLink>
  
      <img className={styles.img1} alt='Toy' src='img/img-2-1.jpeg'/>
      <NavLink to="/Toy" className={styles.nav_list_item}>장난감</NavLink>
      
      <img className={styles.img1} alt='Bath' src='img/img-7-1.jpeg'/>
      <NavLink to="/Bath" className={styles.nav_list_item}>목욕/위생</NavLink>
  
      <img className={styles.img1} alt='health' src='img/img-11-1.jpeg'/>
      <NavLink to="/health" className={styles.nav_list_item}>건강보조제</NavLink>
  
      <img className={styles.img1} alt='Walk' src='img/img-8-1.jpeg'/>
      <NavLink to="/Walk" className={styles.nav_list_item}>산책/외출</NavLink>
    </div>
  )
}

const NavBar = () => {
  let [list, setList] =useState(false);

  return (
    <div>
      <nav className={styles.nav} >
        <div className={`${styles.tabmenu} ${styles.tabmenu1}`} onClick = {() => {setList(!list)}} >
          <RxTextAlignJustify className={styles.icon}/>
          전체 카테고리
          {list && <NavList/>}
        </div>
        <div>
          <NavLink to="/Exhibitions" className={styles.tabmenu}>
             기획전
          </NavLink>
        </div>
        <div>
          <NavLink to="/event" className={styles.tabmenu}>
             이벤트
          </NavLink>
        </div>
        <div>
          <NavLink to="/cupon" className={styles.tabmenu}>
             쿠폰
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;