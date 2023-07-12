import React from 'react';
import { NavLink } from 'react-router-dom';

//css
import styles from '../../../styles/css/components/Category/Category.module.css';

//메인 슬라이드 베너 하단 카테고리 메뉴
const Category = () => {
  return (
    <div className={styles.category}>
      <ul className={styles.category_ul}>

      <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-1-1.jpeg'/>
        회원혜택 
      </NavLink>
      </li>

      {/* <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-11-1.jpeg'/>
        포에버365 
      </NavLink>
      </li> */}

      <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-4-1.jpeg'/>
        사료 
      </NavLink>
      </li>

      <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-5-1.jpeg'/>
        간식
      </NavLink>
      </li>

      <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-6-1.jpeg'/>
        패션
      </NavLink>
      </li>

      <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-2-1.jpeg'/>
        장난감 
      </NavLink>
      </li>

      <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-7-1.jpeg'/>
      목욕/위생 
      </NavLink>
      </li>

      <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-11-1.jpeg'/>
      건강보조제 
      </NavLink>
      </li>

      <li className={styles.category_item}>
      <NavLink to="/login" className={styles.category_link}> 
      <img className={styles.category_img} alt='food' src='img/img-8-1.jpeg'/>
      산책/외출
      </NavLink>
      </li>
      
      </ul>
    </div>
  );
};

export default Category;