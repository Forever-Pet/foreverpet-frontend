import React from "react";

//css
import styles from "../../styles/css/components/Banner/MainBanTwo.module.css";

//웹 메인 2단 베너
const MainBanTwoData = [
  {
    src: "img/dog1.jpg",
    quote: "포에버펫 추천",
    title: "하이코 이누",
    name: "포에버펫 단독 입점",
  },
  {
    src: "img/cat1.jpg",
    quote: "포에버 단독 특가",
    title: "어디서나 시원하게",
    name: "콘디 냉감 쿨링 블랭킷",
  },
];

const MainBanTwo = (props) => {
  return (
    <div className={styles.bantwo}>
      <div className={styles.bantwo_eve}>
        {MainBanTwoData.map((props, index) => {
          return (
            <div className={styles.bantwo_pro} key={index}>
              <div className={styles.bantwo_img}>
                <img src={props.src} alt="" className={styles.bantwo_img_1} />
              </div>
              <div className={styles.bantwo_info}>
                <div className={styles.info1}>{props.quote}</div>
                <div className={styles.info2}>{props.title}</div>
                <div className={styles.info3}>{props.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainBanTwo;
