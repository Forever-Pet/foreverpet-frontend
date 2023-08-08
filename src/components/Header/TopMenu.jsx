import React, { useState } from 'react';

//css
import styles from '../../styles/css/pages/TopMenu.module.css';
import { Link } from 'react-router-dom';

//헤더 - 회원가입,로그인,주문내역 
const TopMenu = () => {
  const [currentTab , setTab] = useState(0);

   const selectTopHandler = (index) => {
     setTab(index);
   };

   const TopMenuArr = [
    {id: 0 ,name: '회원가입' , url: '/user/join'},
    {id: 1 ,name: '로그인' , url: '/user/login'},
    {id: 2 ,name: '주문내역' , url: '/member/order'}
  ];

  return (
    <div>
      <div className={styles.top_menu}>
          {TopMenuArr.map((d) => {
            return(
              <Link to={d.url} key={d.id} className={styles.top_menu_prd} onClick={() => selectTopHandler(index)}> {d.name}</Link>
            )
          })}
      </div>
    </div>
  );
};

export default TopMenu;

