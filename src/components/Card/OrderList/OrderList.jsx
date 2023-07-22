// CSS
import styles from "../../../styles/css/components/Card/OrderList/OrderList.module.css";

// Components
import Image from "../../../common/Img/Image";

// Dummy data
const data = [
  {
    id: 1,
    imageUrl:
      "https://www.bohori.com/web/product/medium/202304/8c40e60df9ad25fdd15c40f72b779ede.jpg",
    name: "채식 애견껌 스틱형 120g (12개임)-오리지널 맛 (초록색) 맛있어요 !대박임 !",
    quantity: 2,
    totalAmount: 9000,
  },
  {
    id: 2,
    imageUrl:
      "https://www.bohori.com/web/product/medium/202304/a5eaff3c46627bd4f906aecf541bf549.jpg",
    name: "채식 애견껌 스틱형 120g (12개입)-과일 맛 (베이지색)",
    quantity: 1,
    totalAmount: 4500,
  },
];

const OrderList = (props) => {
  // 일정 글자수 이상일 경우 자르기
  const productNameSlice = (name) => {
    const result = name.slice(0, 35);
    return `${result}...`;
  };
  return (
    <ul>
      {data?.map((productItem, _) => {
        return (
          <li key={productItem.id} className={styles["order-list__item"]}>
            <Image
              src={productItem.imageUrl}
              className="order-list__image"
              alt=""
            />
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
            <span>{productItem.totalAmount}원</span>
          </li>
        );
      })}
    </ul>
  );
};

export default OrderList;
