import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainSwiper from '../components/Banner/MainSwiper';
import Category from '../components/Navigation/Category/Category';
import BestItem from '../components/Home/BestItem';
import CartegoryItem from '../components/Card/CartegoryItem';
import BestData from '../components/Card/BestData';
import MainBanTwo from '../components/Banner/MainBanTwo';

//css
import styles from '../styles/css/pages/Home.module.css';
import NewItem from '../components/Home/NewItem';

const Home = () => {
  return (
  <div className={styles.home}>
    <Header/>
    <MainSwiper/>
    <Category categoryItem={CartegoryItem} />
    <BestItem bestData={BestData}/>
    <MainBanTwo/>
    <NewItem/>
    <div className={styles.home_ban}>
      <img src='img/eveban1.jpg' alt='' className={styles.home_ban_img}/>
      <img src='img/eveban2.jpg' alt='' className={styles.home_ban_img}/>
    </div>
    {/* <SubSlider carouselData={CarouselData}/> */}
    <Footer/>
  </div>
  );
};

export default Home;
