import styles from '../../styles/css/components/Card/ProductContent.module.css'

const ProductContent = () => {
  return <>
    <div className={styles.productContent}>
      <p className={styles.productContent__brandName}>브랜드명</p>
      <h3 className={styles.productContent__productName}>상품명</h3>
      <div>
        <span className={`${styles.productContent__sale} ${styles.productContent__sale__orange}`}>10%</span>
        <span className={styles.productContent__sale}>4,500원</span>
        <span className={styles.productContent__salePrice}>5000원</span>
      </div>
    </div>
  </>
}

export default ProductContent;