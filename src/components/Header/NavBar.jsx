import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../common/Input/Input';

//css 
import styles from '../../styles/css/pages/NavBar.module.css';

//icon
import { RxTextAlignJustify } from "react-icons/rx";
import { BiUser ,BiBasket } from "react-icons/bi";
import { GoSearch} from "react-icons/go";

const NavListArr = () => { 
  const [currentTab , setTab] = useState(0);
  const navListArr = [
    {name : '사료' , src : 'img/img-4-1.jpeg', url: '/product/feed' },
    {name : '간식' , src : 'img/img-5-1.jpeg', url: '/product/snack'},
    {name : '패션' , src : 'img/img-6-1.jpeg', url: '/product/fashion'},
    {name : '장난감' , src : 'img/img-2-1.jpeg', url: '/product/toy'},
    {name : '목욕/위생' , src : 'img/img-7-1.jpeg',url: '/product/bath'},
    {name : '건강보조제' , src : 'img/img-11-1.jpeg', url: '/product/health'},
    {name : '산책/외출' , src : 'img/img-8-1.jpeg', url: '/product/walk'},
  ];
  const selectNavHandler = (index) => {
    setTab(index);
  };

  return ( 
     <div className={styles.nav_list}>
       {navListArr.map((props , index) => {
        return(
          <div key={index} className={styles.nav_list_item} onClick={() => selectNavHandler(index)}>
            <Link to={props.url} className={styles.listItem_name}>{props.name}</Link>
            <img src={props.src} alt='' className={styles.nav_list_img}/>
          </div>
        )
       })}
        </div>
          
  )
}


const NavBar = () => {
  const [list, setList] =useState(false);
  const [currentNav , setNav] = useState(0);

  const navList = [
    {name: '전체 카테고리'},
    {name: '기획전' ,  url: 'category/exhibitions'},
    {name: '이벤트' ,  url: 'category/event'}
  ]
  
  const NavHandler = (index) => {
    setNav(index);
  }

  return (
    <div className={styles.navbar_h}>
      <nav className={styles.navbar_pro}>
      <div className={`${styles.tabmenu} ${styles.tabmenu1}`} onClick = {() => {setList(!list)}} >
         <RxTextAlignJustify className={styles.icon}/>
         {list && <NavListArr/>}
      </div>
      {navList.map((tap , index) => {
        return(
          <div key={index} className={styles.tabmenu} onClick={() => NavHandler(index)} >
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
