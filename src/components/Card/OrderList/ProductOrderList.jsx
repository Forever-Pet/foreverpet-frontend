// CSS
import styles from "../../../styles/css/components/Card/OrderList/OrderList.module.css";

// Utils
import { addPriceComma } from "../../../utils/addPriceComma";

// Components
import Image from "../../../common/Img/Image";
import { useEffect, useState } from "react";

const ProductOrderList = (props) => {
  const [productOrder, setProductOrder] = useState([
    props.paymentsProductDetailInfo,
  ]);
  // 일정 글자수 이상일 경우 자르기
  const productNameSlice = (name) => {
    const result = name.slice(0, 35);
    return `${result}...`;
  };

  return (
    <ul>
      <li className={styles["order-list__item"]}>
        <Image
          src={productOrder[0].productImage}
          className="order-list__image"
          alt=""
        />
        <div className={styles["order-list__item--test"]}>
          <span className={styles["order-list__item--middle"]}>
            <span className={styles["order-list__item--name"]}>
              {props.paymentsProductDetailInfo.productName.length > 40
                ? productNameSlice(props.paymentsProductDetailInfo.productName)
                : props.paymentsProductDetailInfo.productName}
            </span>
            <span className={styles["order-list__item--quantity"]}>
              {productOrder.length} 개
            </span>
          </span>
          <span className={styles["order-list__item--amount"]}>
            {addPriceComma(props.paymentsProductDetailInfo.productPrice)}원
          </span>
        </div>
      </li>
    </ul>
  );
};

export default ProductOrderList;
