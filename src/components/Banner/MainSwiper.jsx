import React, { useState } from 'react';
import imageData from '../../assets/data';
import { Carousel } from 'react-responsive-carousel';

//css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/css/components/Banner/MainSlides.module.css";

const renderSlides = imageData.map(image => (
  <div key={image.alt}>
    <img src={image.src} alt={image.alt}/>
  </div>
));

//메인 슬라이드
const MainSwiper = () => {
  const [currentIndex , setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className={styles.slides}>
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      selectedItem={imageData[currentIndex]}
      onChange={handleChange}
      className="w-[400px] lg:hidden ">
      {renderSlides}
    </Carousel>
</div>
  );
};

export default MainSwiper;