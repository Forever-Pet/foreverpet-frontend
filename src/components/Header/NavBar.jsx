import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//icon
import { RxCross2 , RxTextAlignJustify } from "react-icons/rx";

//css
import styles from '../../styles/css/pages/NavBar.module.css';

//nav list 
function NavList () {
  return (
    <div className={styles.nav_list}>
      <img className={styles.img1} alt='food' src='img/img-4-1.jpeg'/>
      <NavLink to="/login" className={styles.nav_list_item}> 사료 </NavLink>
     
      <img className={styles.img1} alt='food' src='img/img-5-1.jpeg'/>
      <NavLink to="/login" className={styles.nav_list_item}>간식</NavLink>

      <img className={styles.img1} alt='food' src='img/img-6-1.jpeg'/>
      <NavLink to="/login" className={styles.nav_list_item}>패션</NavLink>
  
      <img className={styles.img1} alt='food' src='img/img-2-1.jpeg'/>
      <NavLink to="/login" className={styles.nav_list_item}>장난감</NavLink>
      
      <img className={styles.img1} alt='food' src='img/img-7-1.jpeg'/>
      <NavLink to="/login" className={styles.nav_list_item}>목욕/위생</NavLink>
  
      <img className={styles.img1} alt='food' src='img/img-11-1.jpeg'/>
      <NavLink to="/login" className={styles.nav_list_item}>건강보조제</NavLink>
  
      <img className={styles.img1} alt='food' src='img/img-8-1.jpeg'/>
      <NavLink to="/login" className={styles.nav_list_item}>산책/외출</NavLink>
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