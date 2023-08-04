import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Compoennts
import ProductItem from "../Card/ProductItem";

//css
import styles from "../../styles/css/components/Category/Snack.module.css";

//메인 홈 - 스낵 베너
const PrdSnack = (props) => {
   const [snack, setSnack] = useState([]);
  // const {id} = useParams();

  useEffect(() => {
    const url = `http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/products/categories`;
    const data = async () => {
      try {
        const res = await axios.get(url);
        const randomSnackItem = [];
        while(true){
          if(randomSnackItem.length==4){
            break;
          }
          const random = Math.floor(Math.random() * res.data.length);
          if(randomSnackItem.filter(item => item.id===random + 1).length ===0){
            randomSnackItem.push(res.data[random]);
          }
        }
        // console.log(randomBestItem);
         setSnack(randomSnackItem);
      }catch(error) {
        console.log(error);
      }
    }
    data();
  },[]);
  return (
      <div className={styles.snack_Slide}>
        <div className={styles.snack_Slide_hea}>
          <h2>영양 만점 간식 추천</h2>
        </div>
        <div className={styles.snack_Slide_prd}>
          <ProductItem data={snack} className='container-4columns'/>
        </div>
      </div>
  );
};

export default PrdSnack;
