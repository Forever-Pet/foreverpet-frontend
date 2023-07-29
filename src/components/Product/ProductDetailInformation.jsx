// CSS
import styles from "../../styles/css/components/Product/ProductDetailInformation.module.css";

import img from "../../assets/image 26.svg";

// Components
import Image from "../../common/Img/Image";
import Title from "../../common/Title/Title";
import { useEffect } from "react";

const ProductDetailInformation = (props) => {
  useEffect(() => {console.log(props.productDetailData)}, [])
  return (
    <div className={styles["product-detail__information"]}>
      <Image src={props.productDetailData.productImage} alt="" className="product-detail__information-img" />

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
