import React from 'react';
import { Link} from 'react-router-dom';

// Compoennts
import CartegoryItem from '../../Card/CartegoryItem';
import Image from '../../../common/Img/Image';

//css
import styles from '../../../styles/css/components/Category/Category.module.css';

//메인 캐러셀 하단 카테고리
const Category = () => {

  //api호출 
  const getCategory = async (myCategories) => {
    const res = await axios.get('http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/products');
    return res.data.filter(item=>item.categories == myCategories);
  }

  return (
    <div className={styles.category}>
       <div className={styles.category_ul}>
         {CartegoryItem.map((props,index) => {
          return (
            <Link to={props.url} className={styles.category_link} key={index} >
               <div className={styles.category_item} onClick={()=>pathMove(props.url, getCategory(props.categories), true)}> 
                  <Image src={props.img} className='category_img' />
                  <div>{props.title}</div>
               </div>
            </Link>
          )
         })}
       </div>
    </div>
  );
};

export default Category;