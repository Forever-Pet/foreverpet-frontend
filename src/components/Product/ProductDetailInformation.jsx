// CSS
import styles from "../../styles/css/components/Product/ProductDetailInformation.module.css";

// Components
import Image from "../../common/Img/Image";
import Title from "../../common/Title/Title";

const ProductDetailInformation = (props) => {
  return (
    <div className={styles["product-detail__information"]}>
      <Image
        src={props.productDetailData.productImage}
        alt=""
        className="product-detail__information-img"
      />

      <div className={styles["product-detail__title"]}>
        <Title title="상품 상세정보" />
      </div>
      <div className={styles["product-detail__information-container"]}>
        <p>{props.productDetailData.productDescription}</p>
      </div>
    </div>
  );
};

export default ProductDetailInformation;
