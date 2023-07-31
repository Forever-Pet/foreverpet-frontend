import React from 'react';
import { Link } from 'react-router-dom';

// Compoennts
import NewItemData from '../Card/NewItemData';
import Image from '../../common/Img/Image';

//css
import styles from '../../styles/css/components/Home/NewItem.module.css';

//icon
import { BsCart } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";

//메인 홈 - 신상품 아이템 
const NewItem = () => {
  return (
    <div className={styles.newitem}>
      <div className={styles.header_text}>
        <h2>두근 두근 설레는 신상품</h2>
      </div>
      <div className={styles.product}>
        {NewItemData.map((props,index) => {
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
                  <p>{props.new}</p>
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

export default NewItem;