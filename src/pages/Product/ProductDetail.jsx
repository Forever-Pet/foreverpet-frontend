// React
import { useParams } from "react-router-dom";

// CSS
import styles from "../../styles/css/pages/Product/ProductDetail.module.css";

// Components
import ProductDetailInformation from "../../components/Product/ProductDetailInformation";
import ProductDetailPriceCard from "../../components/Card/Detail/ProductDetailPriceCard";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    // 해당 params id로 상품 ID 요청
    console.log(id);
  });
  return (
    <div className={styles["product-detail__view-wrap"]}>
      <div className={styles["header"]}>헤더임</div>

      <div className={styles["product-detail__view-container"]}>
        <div className={styles["product-detail__view--information"]}>
          <ProductDetailInformation />
        </div>

        <div className={styles["product-detail__view--PriceCard"]}>
          <ProductDetailPriceCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
