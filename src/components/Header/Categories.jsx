import React from 'react';
import { NavLink } from 'react-router-dom';

//css
import styles from '../../styles/css/pages/Categories.module.css';

//헤더 상단
const Categories = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div>
          <NavLink to="/join" className={styles.tabmenu}>
             회원가입
          </NavLink>
        </div>
        <div >
          <NavLink to="/login" className={styles.tabmenu}>
             로그인
          </NavLink>
        </div>
        <div>
          <NavLink to="/order" className={styles.tabmenu}>
             주문내역
          </NavLink>
        </div>
        <div>
          <NavLink to="/customer" className={styles.tabmenu}>
             고객센터
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Categories;