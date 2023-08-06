import React, { useState } from 'react';

// Compoennts
import TopMenuArr from '../Card/TopMenuArr';

//css
import styles from '../../styles/css/pages/TopMenu.module.css';
import { Link } from 'react-router-dom';

//헤더 - 회원가입,로그인,주문내역 
const TopMenu = () => {
  const [currentTab , setTab] = useState(0);

   const selectTopHandler = (index) => {
     setTab(index);
   }
  
  return (
    <div>
      <div className={styles.top_menu}>
          {TopMenuArr.map((props , index) => {
            return(
              <Link to={props.url} key={index} className={styles.top_menu_prd} onClick={() => selectTopHandler(index)}> {props.name}</Link>
            )
          })}
      </div>
    </div>
  );
};

export default TopMenu;

