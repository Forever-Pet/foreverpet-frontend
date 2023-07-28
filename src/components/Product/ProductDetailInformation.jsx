// CSS
import styles from "../../styles/css/components/Product/ProductDetailInformation.module.css";

import img from "../../assets/image 26.svg";

// Components
import Image from "../../common/Img/Image";
import Title from "../../common/Title/Title";

const ProductDetailInformation = (props) => {
  return (
    <div className={styles["product-detail__information"]}>
      <Image src={img} alt="" className="product-detail__information-img" />

      <div className={styles["product-detail__title"]}>
        <Title title="상품 상세정보" />
      </div>
      <div className={styles["product-detail__information-container"]}>
        <div>멍멍멍</div>
        <div>이거는 강아지 음식임</div>
        <div>곽두팔은 엄청 쎼보이는 이름임</div>
        <div>냥냥 펀치</div>
      </div>
    </div>
  );
};

export default ProductDetailInformation;
