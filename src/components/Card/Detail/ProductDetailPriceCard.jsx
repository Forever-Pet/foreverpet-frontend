import { CopyToClipboard } from "react-copy-to-clipboard";

// Custom Hook
import usePathMove from "../../../hooks/usePathMove";
import { useCartHook } from "../../../hooks/ClickHook/useCartHook";

// Redux
import { useSelector } from "react-redux/es/hooks/useSelector";

// CSS
import styles from "../../../styles/css/components/Card/Detail/ProductDetailPriceCard.module.css";

// Icons
import { BsHeart, BsShare } from "react-icons/bs";

// Components
import Button from "../../../common/Button/Button";

// Util
import { addPriceComma } from "../../../utils/addPriceComma";

const ProductDetailPriceCard = (props) => {
  const { ckBag } = useCartHook();
  const pathMove = usePathMove();
  const userAuth = useSelector((state) => state.auth.token);
  const productItemPayment = () => {
    if (userAuth === null || undefined || "") {
      return pathMove("/user/login");
    }
    pathMove("/payments", props.productDetailData, true);
  };

  const addCartData = () => {
    const { productDetailData } = props;
    ckBag(productDetailData);
  };
  return (
    <div className={styles["product-detail__wrap"]}>
      <ul className={styles["product-detail"]}>
        <li className={styles["product-detail__brandName"]}>
          <span>{props.productDetailData.brandName}</span>
          <div className={styles["product-detail__icon"]}>
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => alert("링크 복사완료 !")}
            >
              <BsShare className={styles["product-detail__share"]} />
            </CopyToClipboard>
            <BsHeart className={styles["product-detail__heart"]} />
          </div>
        </li>
        <li className={styles["product-detail__productName"]}>
          {props.productDetailData.productName}
        </li>
        <li className={styles["product-detail__price"]}>
          {addPriceComma(props.productDetailData.productPrice)}
          <span className={styles["product-detail__price-text"]}>원</span>
        </li>
      </ul>
      <div className={styles["product-detail__btn"]}>
        <Button
          title="장바구니"
          className="product-detail__btn--cart"
          onClick={addCartData}
        />
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
