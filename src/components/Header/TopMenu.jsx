import React, { useState } from 'react';

//css
import styles from '../../styles/css/pages/TopMenu.module.css';
import { Link } from 'react-router-dom';

//헤더 상단
const TopMenu = () => {
  const [currentTab , setTab] = useState(0);
  
  const TopMenuArr = [
    {name: '회원가입' , url: '/user/join'},
    {name: '로그인' , url: '/user/login'},
    {name: '주문내역' , url: '/member/order'},
    {name: '고객센터' , url: '/member/modify'},
  ];

   const selectTopHandler = (index) => {
     setTab(index);
   }
  
  return (
    <div>
      <nav className={styles.top_menu}>
          {TopMenuArr.map((props , index) => {
            return(
              <Link to={props.url} key={index} className={styles.top_menu_prd} onClick={() => selectTopHandler(index)}> {props.name}</Link>
            )
          })}
      </nav>
    </div>
  );
};

export default TopMenu;

