import React, { useState } from "react";

// Compoennts
import imageData from "../../assets/data";
import { Carousel } from "react-responsive-carousel";
import Image from "../../common/Img/Image";
//css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/css/components/Banner/MainSlides.module.css";

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <Image src={image.src} alt={image.alt} />
  </div>
));

//메인 슬라이드
const MainSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState();
  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slides}>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="w-[400px] lg:hidden "
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default MainSwiper;
