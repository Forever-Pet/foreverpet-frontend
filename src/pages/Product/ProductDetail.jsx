import axios from "axios";

// React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CSS
import styles from "../../styles/css/pages/Product/ProductDetail.module.css";

// Components
import BagModal from "../../common/Modal/BagModal";
import ProductDetailInformation from "../../components/Product/ProductDetailInformation";
import ProductDetailPriceCard from "../../components/Card/Detail/ProductDetailPriceCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProductDetail = () => {
  const [productDetailData, setProductDetailData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const API_URL = `${import.meta.env.VITE_API_BASE_URL}/products/${id}`;
    const ProductIdServerData = async () => {
      try {
        const res = await axios.get(API_URL);
        // console.log(data)
        setProductDetailData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    ProductIdServerData();
  }, []);

  return (
    <div className={styles["product-detail__view-wrap"]}>
      <div className={styles["product-detail__view-cartModal"]}>
        <BagModal />
      </div>
      <Header />
      <div className={styles["product-detail__view-container"]}>
        <div className={styles["product-detail__view--information"]}>
          <ProductDetailInformation productDetailData={productDetailData} />
        </div>

        <div className={styles["product-detail__view--PriceCard"]}>
          <ProductDetailPriceCard productDetailData={productDetailData} />
        </div>
      </div>
      <div className={styles["product-detail__footer"]}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
