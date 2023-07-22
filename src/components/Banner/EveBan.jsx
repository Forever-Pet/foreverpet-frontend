import React from 'react';

//css
import styles from '../../styles/css/components/Home/EveBan.module.css';

const eveBanData = [
  {
   src : 'img/eveitem.jpg',
   title : "포에버펫이 고른 제품,",
   name : "누구에게나 선물해 보세요!",
   quote: "혜택 보러가기",
  
  },
  {
    src : 'img/eveitem2.jpg',
    title : "더 특별해진 포에버펫의",
    name : "멤버십 혜택을 만나보세요!",
    quote : "혜택 보러가기",
   },
];

//메인 홈 - 하단 이벤트 베너 
const EveBan = () => {
  return (
    <div className={styles.eveban}>
       <div className={styles.eveban_eve} >
          {eveBanData.map((props ,index) => {
            return (
            <div className={styles.eveban_pro} key={index}>
              <div className={styles.eveban_img}>
                  <img src={props.src} alt='' className={styles.eveban_img_1} />
              </div>
              <div className={styles.eveban_info}>
                <div className={styles.info1}>{props.title}</div>
                <div className={styles.info2}>{props.name}</div>
              </div>
              <div className={styles.eveban_info_h}>
                <div className={styles.info3}>{props.quote}</div>
              </div>
            </div>
            )
          })}
       </div>
    </div>
  );
};


export default EveBan;