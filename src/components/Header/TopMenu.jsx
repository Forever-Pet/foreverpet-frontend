import React, { useState } from 'react';
import Join from '../../pages/Login/Join';
import Login from '../../pages/Login/Login';
import Order from '../../pages/Order/Order';
import Customer from '../../pages/Service/Customer';

//css
import styles from '../../styles/css/pages/TopMenu.module.css';

//헤더 상단
const TopMenu = () => {
  const [currentTab , setTab] = useState(0);
  
  const TopMenuArr = [
    {name: '회원가입' , content: <Join/>},
    {name: '로그인' , content: <Login/>},
    {name: '주문내역' , content: <Order/>},
    {name: '고객센터' , content: <Customer/>},
  ];

   const selectTopHandler = (index) => {
     setTab(index);
   }
  
  return (
    <div>
      {/* 메뉴 객체 따로 만들기 , 컴포넌트 생성 */}
      <nav className={styles.nav}>
          {TopMenuArr.map((tap , index) => {
            return(
              <div 
              key={index} 
              className={styles.tabmenu} 
              onClick={() => selectTopHandler(index)}>
              {tap.name}
              </div>
            )
          })}
      </nav>
    </div>
  );
};

export default TopMenu;

