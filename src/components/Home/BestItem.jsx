import React, { useEffect } from "react";
import useProductRandom from "../../hooks/useProductRandom";

// Compoennts
import ProductItem from "../Card/ProductItem";

//css
import styles from "../../styles/css/components/Home/BestItem.module.css";

//메인 홈 - 베스트 아이템
const BestItem = (props) => {
  const url = "/products/best";
  const [random, getRandom] = useProductRandom(url);

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <div className={styles.bestitem}>
      <div className={styles.bestitem_header__text}>
        <h2>지금 핫한 이 상품 어때요?</h2>
      </div>
      <div className={styles.bestitem_product}>
        <ProductItem data={random} className="container-4columns" />
      </div>
    </div>
  );
};

export default BestItem;
