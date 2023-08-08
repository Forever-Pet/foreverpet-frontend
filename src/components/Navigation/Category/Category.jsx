import React from 'react';

// Compoennts
import CartegoryItem from '../../Card/CartegoryItem';
import Image from '../../../common/Img/Image';

//css
import styles from '../../../styles/css/components/Category/Category.module.css';
import usePathMove from '../../../hooks/usePathMove';

//메인 캐러셀 하단 카테고리
const Category = () => {
  const move = usePathMove()

  //api호출 
  const getCategory = async (myCategories) => {
    const res = await axios.get('http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/products');
    return res.data.filter(item => item.categories == myCategories);
  }

  return (
    <div className={styles.category}>
      <div className={styles.category_ul}>
        {CartegoryItem.map((props, index) => {
          return (

            <div key={index} className={styles.category_item} style={{ cursor: 'pointer' }} onClick={() => move(props.url, { "title": props.title }, true)}>
              <Image src={props.img} className='category_img' />
              <div>{props.title}</div>
            </div>

          )
        })}
      </div>
    </div>
  );
};

export default Category;