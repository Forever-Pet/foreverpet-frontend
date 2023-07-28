import React from 'react';
import { Link} from 'react-router-dom';
import CartegoryItem from '../../Card/CartegoryItem';

//css
import styles from '../../../styles/css/components/Category/Category.module.css';

//메인 캐러셀 하단 카테고리
const Category = () => {
  return (
    <div className={styles.category}>
       <ul className={styles.category_ul}>
         {CartegoryItem.map((props,index) => {
          return (
            <Link to={props.url} className={styles.category_link}  key={index} >
               <div className={styles.category_item} > 
                  <img src={props.src} alt='' className={styles.category_img} />
                  <div>{props.name}</div>
               </div>
            </Link>
          )
         })}
       </ul>
    </div>
  );
};

export default Category;