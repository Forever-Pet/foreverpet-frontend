import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainBanner from '../components/Banner/MainBanner';

//css
import styles from '../styles/css/pages/Home.module.css';

const Home = () => {
  return (
  <div className={styles.home}>
    <Header/>
    <MainBanner/>
    <Footer/>
  </div>
  );
};

export default Home;
