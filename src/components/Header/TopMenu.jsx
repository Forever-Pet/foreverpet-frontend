import React, { useState } from 'react';

//css
import styles from '../../styles/css/pages/TopMenu.module.css';

//헤더 상단
const TopMenu = () => {
  const [currentTab , setTab] = useState(0);
  
  const TopMenuArr = [
    {name: '회원가입' , url: 'login/join'},
    {name: '로그인' , url: 'login/login'},
    {name: '주문내역' , url: 'login/logout'},
    {name: '고객센터' , url: 'login/customer'},
  ];

   const selectTopHandler = (index) => {
     setTab(index);
   }
  
  return (
    <div>
      <nav className={styles.top_menu}>
          {TopMenuArr.map((props , index) => {
            return(
              <div 
              key={index} 
              className={styles.top_menu_prd} 
              onClick={() => selectTopHandler(index)}>
              {props.name}
              </div>
            )
          })}
      </nav>
    </div>
  );
};

export default TopMenu;

