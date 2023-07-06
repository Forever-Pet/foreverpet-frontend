import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import styles from '../../styles/Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
         <main className={styles.main}>

         </main>
      <Footer />
    </div>
  );
};

export default Layout;