import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//categories
import Feed from '../Navigation/Category/Feed';
import Snack from '../Navigation/Category/Snack';
import Fashion from '../Navigation/Category/Fashion';
import Toy from '../Navigation/Category/Toy';
import Bath from '../Navigation/Category/Bath';
import Health from '../Navigation/Category/Health';
import Walk from '../Navigation/Category/Walk';
import Exhibitions from '../../pages/NavBar/Exhibitions';
import Event from '../../pages/NavBar/Event';


//css 
import styles from '../../styles/css/pages/NavBar.module.css';

//icon
import { RxTextAlignJustify } from "react-icons/rx";

//
const NavListArr = () => { 
  const [currentTab , setTab] = useState(0);

  const navListArr = [
    {name : '사료' , src : 'img/img-4-1.jpeg', content: <Feed/> },
    {name : '간식' , src : 'img/img-5-1.jpeg', content: <Snack />},
    {name : '패션' , src : 'img/img-6-1.jpeg', content: <Fashion/>},
    {name : '장난감' , src : 'img/img-2-1.jpeg', content: <Toy/>},
    {name : '목욕/위생' , src : 'img/img-7-1.jpeg', content: <Bath/>},
    {name : '건강보조제' , src : 'img/img-11-1.jpeg', content: <Health/>},
    {name : '산책/외출' , src : 'img/img-8-1.jpeg', content: <Walk/>},
  ];
  const selectNavHandler = (index) => {
    setTab(index);
  }

  return ( 
     <div className={styles.nav_list}>
       {navListArr.map((props , index) => {
        return(
          <div 
            key={index}
            className={styles.nav_list_item}
            onClick={() => selectNavHandler(index)}>
            <div className={styles.listItem_name}>{props.name}</div>
            <img src={props.src} alt='' className={styles.nav_list_img}/>
          </div>
        )
       })}
        </div>
          
  )
}


//네비바 
const NavBar = () => {
  const [list, setList] =useState(false);
  const [currentNav , setNav] = useState(0);

  const navList = [
    {name: '전체 카테고리'},
    {name: '기획전' , content: <Exhibitions/>},
    {name: '이벤트' , content: <Event/>}
  ]
  
  const NavHandler = (index) => {
    setNav(index);
  }

  return (
    <div>
      <nav className={styles.nav} >
      <div className={`${styles.tabmenu} ${styles.tabmenu1}`} onClick = {() => {setList(!list)}} >
         <RxTextAlignJustify className={styles.icon}/>
         {list && <NavListArr/>}
      </div>
      {navList.map((tap , index) => {
        return(
          <div 
            key={index}
            className={styles.tabmenu}
            onClick={() => NavHandler(index)}
          >
            {tap.name}
          </div>
        )
       })}
      </nav>
    </div>
  );
};

export default NavBar;
