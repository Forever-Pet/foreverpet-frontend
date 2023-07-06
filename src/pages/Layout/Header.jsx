import React from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
           포에버펫
        </div>
        
        <nav className={styles.navigation}>
          <ul>
            <li>
             메뉴 1
            </li>
            <li>
             메뉴 1
            </li>
            <li>
             메뉴 1
            </li>
          </ul>
        </nav>

      </div>

    </header>
  );
};

export default Header;