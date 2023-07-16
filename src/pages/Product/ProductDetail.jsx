// CSS
import styles from "../../styles/css/pages/Product/ProductDetail.module.css";

// Components
import ProductDetailInformation from "../../components/Product/ProductDetailInformation";
import ProductDetailPriceCard from "../../components/Card/Detail/ProductDetailPriceCard";

const ProductDetail = () => {
  return (
    <div className={styles["product-detail__view-wrap"]}>
      <div className={styles["header"]}>헤더임</div>
      <div className={styles["test"]}>
        <div className={styles["product-detail__view-container"]}>
          <div className={styles["product-detail__view--information"]}>
            <ProductDetailInformation />
          </div>
          <div className={styles["product-detail__view--PriceCard"]}>
            <ProductDetailPriceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
