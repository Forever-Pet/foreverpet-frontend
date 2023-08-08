// Redux
import { useSelector } from "react-redux";

// CSS
import styles from "../../../styles/css/components/Card/OrderList/OrderList.module.css";

// Utils
import { addPriceComma } from "../../../utils/addPriceComma";

// Components
import Image from "../../../common/Img/Image";
import { useEffect } from "react";

const OrderList = (props) => {
  // 일정 글자수 이상일 경우 자르기
  const productNameSlice = (name) => {
    const result = name.slice(0, 35);
    return `${result}...`;
  };

  const cartData = useSelector((state) => state.cart.cartItem);

  return (
    <ul>
      {cartData?.map((productItem, _) => {
        return (
          <li key={productItem.id} className={styles["order-list__item"]}>
            <Image
              src={productItem.productImage}
              className="order-list__image"
              alt=""
            />

            <div className={styles["order-list__item--test"]}>
              <span className={styles["order-list__item--middle"]}>
                <span className={styles["order-list__item--name"]}>
                  {productItem.productName.length > 40
                    ? productNameSlice(productItem.productName)
                    : productItem.productName}
                </span>
                <span className={styles["order-list__item--quantity"]}>
                  {productItem.count}개
                </span>
              </span>
              <span className={styles["order-list__item--amount"]}>
                {addPriceComma(productItem.productPrice * productItem.count)}원
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default OrderList;
