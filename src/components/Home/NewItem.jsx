import React, {useEffect} from 'react';
import ProductItem from '../Card/ProductItem';
import useProductRandom from '../../hooks/useProductRandom';

//css
import styles from '../../styles/css/components/Home/NewItem.module.css';

//메인 홈 - 신상품 아이템 
const NewItem = () => {
  const url = "/products/new";
  const [random, getRandom ] = useProductRandom(url);

  useEffect(() => {
    getRandom();
  },[]);
 
  return (
    <div className={styles.newitem}>
      <div className={styles.newitem_header__text}>
        <h2>두근 두근 설레는 신상품</h2>
      </div>
      <div className={styles.newitem__product}>
        <ProductItem data={random} className='container-4columns'/>
      </div> 
    </div>
  );
};

export default NewItem;