import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainSwiper from "../components/Banner/MainSwiper";
import Category from "../components/Navigation/Category/Category";
import BestItem from "../components/Home/BestItem";
import CartegoryItem from "../components/Card/CartegoryItem";
import MainBanTwo from "../components/Banner/MainBanTwo";
import NewItem from "../components/Home/NewItem";
import PrdSnack from "../components/Home/PrdSnack";

//css
import styles from "../styles/css/pages/Home.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <MainSwiper />
      <Category categoryItem={CartegoryItem} />
      <BestItem />
      <MainBanTwo />
      <NewItem />
      <div className={styles.home_ban}>
        <img
          src="img/eveban1.jpg"
          alt="메인 베너 이미지"
          className={styles.home_ban_img}
        />
        <img
          src="img/eveban2.jpg"
          alt="메인 베너 이미지"
          className={styles.home_ban_img}
        />
      </div>
      <PrdSnack />
      <Footer />
    </div>
  );
};

export default Home;
