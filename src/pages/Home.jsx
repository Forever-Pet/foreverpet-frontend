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
import EveBan from '../components/Banner/EveBan';

const Home = () => {
  return (
  <div className={styles.home}>
    <Header/>
    <MainSwiper/>
    <Category categoryItem={CartegoryItem} />
    <BestItem bestData={BestData}/>
    <MainBanTwo/>
    <NewItem/>
    <EveBan/>
    {/* <SubSlider carouselData={CarouselData}/> */}
    <Footer/>
  </div>
  );
};

export default Home;
