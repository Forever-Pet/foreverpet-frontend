import React, { useState } from 'react';

//css
import styles from '../../styles/css/pages/TopMenu.module.css';
import { Link } from 'react-router-dom';
import TopMenuArr from '../Card/TopMenuArr';

//헤더 상단
const TopMenu = () => {
  const [currentTab , setTab] = useState(0);

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

