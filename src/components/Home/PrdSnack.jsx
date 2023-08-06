import React,{useEffect} from 'react';

// Compoennts
import ProductItem from "../Card/ProductItem";
import useProductRandom from '../../hooks/useProductRandom';

//css
import styles from "../../styles/css/components/Category/Snack.module.css";

//메인 홈 - 스낵 베너
const PrdSnack = (props) => {
  const url = "/products/categories?categories=SNACK";
  const [random, getRandom ] = useProductRandom(url);
  
  useEffect(() => {
    getRandom();
  },[]);

  return (
      <div className={styles.snack_Slide}>
        <div className={styles.snack_Slide_hea}>
          <h2>영양 만점 간식 추천</h2>
        </div>
        <div className={styles.snack_Slide_prd}>
          <ProductItem data={random} className='container-4columns'/>
        </div>
      </div>
  );
};

export default PrdSnack;
