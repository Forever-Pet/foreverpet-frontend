// CSS
import styles from "../../../styles/css/components/Card/OrderList/OrderList.module.css";

// Utils
import { addPriceComma } from "../../../utils/addPriceComma";

// Components
import Image from "../../../common/Img/Image";

const ProductOrderList = (props) => {
  // 일정 글자수 이상일 경우 자르기
  const productNameSlice = (name) => {
    const result = name.slice(0, 35);
    return `${result}...`;
  };

  return (
    <ul>
      <li key={productItem.id} className={styles["order-list__item"]}>
        <Image
          src={props.productItem.imageUrl} // 프롭스 데이터
          className="order-list__image"
          alt=""
        />
        <div className={styles["order-list__item--test"]}>
          <span className={styles["order-list__item--middle"]}>
            <span className={styles["order-list__item--name"]}>
              {
                props.productItem.name.length > 40 // 프롭스 데이터
                  ? productNameSlice(props.productItem.name) // 프롭스 데이터
                  : props.productItem.name
                // 프롭스 데이터
              }
            </span>
            <span className={styles["order-list__item--quantity"]}>
              {
                // 프롭스 데이터
                props.productItem.quantity
              }
              개
            </span>
          </span>
          <span className={styles["order-list__item--amount"]}>
            {
              // 프롭스 데이터
              addPriceComma(
                props.productItem.defaultAmount * props.productItem.quantity
              )
            }
            원
          </span>
        </div>
      </li>
    </ul>
  );
};

export default ProductOrderList;
