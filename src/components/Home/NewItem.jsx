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
import ProductItem from '../Card/ProductItem';

//메인 홈 - 신상품 아이템 
const NewItem = () => {
  return (
    <div className={styles.newitem}>
      <div className={styles.header_text}>
        <h2>두근 두근 설레는 신상품</h2>
      </div>
      <div className={styles.product}>
        <ProductItem data={NewItemData} className="container"/>
      </div> 
    </div>
  );
};

export default NewItem;