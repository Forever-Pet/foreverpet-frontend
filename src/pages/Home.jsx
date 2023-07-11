import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainSwiper from '../components/Banner/MainSwiper';

//css
import styles from '../styles/css/pages/Home.module.css';


const Home = () => {
  return (
  <div className={styles.home}>
    <Header/>
    <MainSwiper/>
    <Footer/>
  </div>
  );
};

export default Home;
