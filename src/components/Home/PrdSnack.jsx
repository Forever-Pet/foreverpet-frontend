import React from "react";
import { Link } from "react-router-dom";
import Snack from "../Navigation/Category/Snack";

//css
import styles from "../../styles/css/components/Category/SnackSlide.module.css";

//icon
import { BsCart } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";


//메인 홈 - 스낵 베너
const PrdSnack = (props) => {

  return (
      <div className={styles.snack_Slide}>
        <div className={styles.snack_Slide_hea}>
          <h2>영양 만점 간식 추천</h2>
        </div>
  
        <div className={styles.snack_Slide_prd}>
          {Snack.map((props, index) => {
            return (
              <Link className={styles.product_link} key={index}>
                <div className={styles.product_img}>
                  <img src={props.src} alt="" />
                </div>
                <div className={styles.productinfo}>
                  <p>{props.name}</p>
                </div>
                <div className={styles.productinfo_1}>
                <p>{props.percent}%</p>
                  <p className={styles.productinfo_1_2}>{props.price}</p>
                </div>
                <div className={styles.productinfo_2}>
                  <p>{props.best}</p>
                  <p className={styles.productinfo_2_2}>{props.sale}</p>
                  <div className={styles.productinfo_icon}>
                    <BsCart className={styles.productinfo_icon1} />
                    <VscHeart />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
   
      </div>
  );
};

export default PrdSnack;
