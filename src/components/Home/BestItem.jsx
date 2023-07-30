import React from 'react';
import { Link } from 'react-router-dom';
import BestData from '../Card/BestData';
import Image from '../../common/Img/Image';

//css
import styles from '../../styles/css/components/Home/BestItem.module.css';

//icon
import { BsCart } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";

//메인 홈 - 베스트 아이템 
const BestItem = (props) => {
  return (
    <div className={styles.bestitem}>
      <div className={styles.header_text}>
        <h2>지금 핫한 이 상품 어때요?</h2>
      </div>
      <div className={styles.product}>
        {BestData.map((props,index) => {
          return (
            <Link className={styles.product_link}  key={index}>
               <div className={styles.product_img}>
                <Image src={props.img}/>
               </div>
               <div className={styles.productinfo}>
                 <p>{props.title}</p>
               </div>
               <div className={styles.productinfo_1}>
                 <p>{props.percent}%</p>
                 <p className={styles.productinfo_1_2}>{props.price}원</p>
               </div>
               <div className={styles.productinfo_2}>
                  <p>{props.best}</p>
                  <p className={styles.productinfo_2_2}>{props.sale}</p>
                 
                  <div className={styles.productinfo_icon}>
                  <BsCart className={styles.productinfo_icon1}/>
                  <VscHeart/>
                  </div>
               </div>
             </Link>
          )
        })}
      </div>
    </div>
    
  );
};

export default BestItem;
