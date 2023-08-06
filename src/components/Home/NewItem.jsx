import React, { useState,useEffect} from 'react';
import ProductItem from '../Card/ProductItem';
import axios from 'axios';

//css
import styles from '../../styles/css/components/Home/NewItem.module.css';

//메인 홈 - 신상품 아이템 
const NewItem = () => {
  const [newItem, setNewItem] = useState([]);

  useEffect(() => {
    const url = `http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/products/new`;
    const data = async () => {
   try {
        const res = await axios.get(url);
        res.data.sort((a,b)=>a.id -b.id);
        const randomNewItem = [];
        while(true){
          if(randomNewItem.length==4){
            break;
          }
          const random = Math.floor(Math.random() * res.data.length) + 1;
          if(randomNewItem.filter(item => item.id===random ).length ===0){
            randomNewItem.push(res.data[random -1]);
          }
        }
        // console.log(randomBestItem);
        setNewItem(randomNewItem);
      }catch(error) {
        console.log(error);
      }
    }
    data();
  },[]);
  return (
    <div className={styles.newitem}>
      <div className={styles.newitem_header__text}>
        <h2>두근 두근 설레는 신상품</h2>
      </div>
      <div className={styles.newitem__product}>
        <ProductItem data={newItem} className='container-4columns'/>
      </div> 
    </div>
  );
};

export default NewItem;