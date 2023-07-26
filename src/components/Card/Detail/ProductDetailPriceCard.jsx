// CSS
import styles from "../../../styles/css/components/Card/Detail/ProductDetailPriceCard.module.css";

// Icons
import { BsHeart, BsFillHeartFill, BsShare } from "react-icons/bs";

// Components
import Button from "../../../common/Button/Button";
import { addPriceComma } from "../../../utils/addPriceComma";

// 더미데이터 > props 데이터로 수정할 예정
const card = {
  brandName: "Loving Bone",
  productName: "채식 애견껌 스틱형 120g",
  price: 4500,
};

const ProductDetailPriceCard = (props) => {
  // 상품결제 함수
  const productItemPayment = () =>
    console.log("상품결제 > payments router로 이동");
  return (
    <div className={styles["product-detail__wrap"]}>
      <ul className={styles["product-detail"]}>
        <li className={styles["product-detail__brandName"]}>
          <span>{card.brandName} </span>
          <div className={styles["product-detail__icon"]}>
            <BsShare className={styles["product-detail__share"]} />
            <BsHeart className={styles["product-detail__heart"]} />
          </div>
        </li>
        <li className={styles["product-detail__productName"]}>
          {card.productName}
        </li>
        <li className={styles["product-detail__price"]}>
          {addPriceComma(card.price)}
          <span className={styles["product-detail__price-text"]}>원</span>
        </li>
      </ul>
      <div className={styles["product-detail__btn"]}>
        <Button title="장바구니" className="product-detail__btn--cart" />
        <Button
          title="바로구매"
          className="product-detail__btn--payment"
          onClick={productItemPayment}
        />
      </div>
    </div>
  );
};

export default ProductDetailPriceCard;
