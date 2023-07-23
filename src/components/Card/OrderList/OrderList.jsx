// React Hooks
import { useState } from "react";

// CSS
import styles from "../../../styles/css/components/Card/OrderList/OrderList.module.css";

// Utils
import { addPriceComma } from "../../../utils/addPriceComma";

// Components
import Image from "../../../common/Img/Image";

const OrderList = (props) => {
  // 더미 데이터 상태값 추후 수정
  const [productOrderList, setProductOrderList] = useState(
    props.dummyOrderListData
  );

  // 일정 글자수 이상일 경우 자르기
  const productNameSlice = (name) => {
    const result = name.slice(0, 35);
    return `${result}...`;
  };
  return (
    <ul>
      {productOrderList?.map((productItem, _) => {
        return (
          <li key={productItem.id} className={styles["order-list__item"]}>
            <Image
              src={productItem.imageUrl}
              className="order-list__image"
              alt=""
            />

            <div className={styles["order-list__item--test"]}>
              <span className={styles["order-list__item--middle"]}>
                <span className={styles["order-list__item--name"]}>
                  {productItem.name.length > 40
                    ? productNameSlice(productItem.name)
                    : productItem.name}
                </span>
                <span className={styles["order-list__item--quantity"]}>
                  {productItem.quantity}개
                </span>
              </span>
              <span className={styles["order-list__item--amount"]}>
                {addPriceComma(
                  productItem.defaultAmount * productItem.quantity
                )}
                원
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default OrderList;
