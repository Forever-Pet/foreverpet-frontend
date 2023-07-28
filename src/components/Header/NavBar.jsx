import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../../common/Input/Input';
import NavListData from '../Card/NavListArr';
import NavList from '../Card/NavList';

//css 
import styles from '../../styles/css/pages/NavBar.module.css';

//icon
import { RxTextAlignJustify } from "react-icons/rx";
import { BiUser ,BiBasket } from "react-icons/bi";
import { GoSearch} from "react-icons/go";

//햄버거 버튼 메뉴 리스트
const NavListArr = () => { 
  const [currentTab , setTab] = useState(0);
  const selectNavHandler = (index) => {
    setTab(index);  
  };
  
  //api호출 
  const getProducts = async (myCategories) => {
    const res = await axios.get('http://ec2-3-39-122-241.ap-northeast-2.compute.amazonaws.com/products');
    return res.data.filter(item=>item.categories == myCategories); 
  }

  return ( 
     <div className={styles.nav_list}>
       {NavListData.map((props , index) => {
        return(
          <div key={index} className={styles.nav_list_item} onClick={() => selectNavHandler(index)}>
            <Link to={props.url} className={styles.listItem_name} state={getProducts(props.categories)}>{props.name}</Link>
            <img src={props.src} alt='' className={styles.nav_list_img}/>
          </div>
        )
       })}
        </div>
          
  )
}

//네비바 햄버거 버튼 옆 메뉴 
const NavBar = () => {
  const [list, setList] =useState(false);
  const [currentNav , setNav] = useState(0);
  
  const NavHandler = (index) => {
    setNav(index);
  }

  return (
    <div className={styles.nav}>
      <nav className={styles.nav_menu}>
      <div className={`${styles.nav_menu_pro} ${styles.nav_menu1}`} onClick = {() => {setList(!list)}} >
         <RxTextAlignJustify className={styles.nav_menu_icon}/>
         {list && <NavListArr/>}
      </div>
      {NavList.map((tap , index) => {
        return(
          <div key={index} className={styles.nav_menu_pro} onClick={() => NavHandler(index)} >
            {tap.name}
          </div>
        )
       })}
      </nav>
    <div className={styles.navbar_box}>
      <div className={styles.navbar_box_input}>
        <Input type="text" placeholder="우리 댕냥 알러지 없는 사료" className="searchInput" />
         <GoSearch className={styles.icon1}/>
      </div>
      <div>
        <Link to="/member/modify" className={styles.navbar_box_icon}>
          <BiUser/>
        </Link>
      </div>
      <div>
        <Link to="/member/order" className={styles.navbar_box_icon}>
          <BiBasket/> 
        </Link>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
