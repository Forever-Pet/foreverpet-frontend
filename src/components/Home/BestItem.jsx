import React from 'react';

//css
import styles from '../../styles/css/components/Home/BestItem.module.css';
import { NavLink } from 'react-router-dom';

//메인 홈 - 베스트 아이템 
const BestItem = () => {
  return (
    <div className={styles.bestitem}>
      <div className={styles.header_text}>
        <p>Best Item</p>
        <h2>댕냥이들이 픽한 제품은?</h2>
      </div>
      
      <div className={styles.bestitem_el}>
        <div>
          <div>
            <strong>1</strong>
          </div>
        <NavLink className={styles.img}>
          <img alt='/feed' src='img/bestitem1.jpg'/>
           {/* 찜,장바구니 아이콘 */}
        </NavLink>
        </div>
       
        <div>브이플래닛</div>
        <NavLink>
          <div className={styles.bestitem_co}>
            <div className={styles.bestitem_co1}>
              수파 덴탈스틱 비건간식 100g (7종)
            </div>

            <div className={styles.bestitem_co2}>
              <span>15%</span>
              <span>10,000원</span>
            </div>
           
            <div className={styles.bestitem_co3}>
              <span>BEST</span>
              <span>SALE</span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
    
  );
};



export default BestItem;