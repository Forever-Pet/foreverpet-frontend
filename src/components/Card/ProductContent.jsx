import styles from '../../styles/css/components/Card/ProductContent.module.css'

const ProductContent = (props) => {
  const formattedPrice = (props.data.productPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return <>
    {
      props.data && <div className={styles.productContent}>
        <p className={styles.productContent__brandName}>{props.data.brandName}</p>
        <h4 className={styles.productContent__productName}>{props.data.productName}</h4>
        <div>
          <span className={`${styles.productContent__sale} ${styles.productContent__sale__orange}`}>할인율</span>
          <span className={styles.productContent__sale}>{formattedPrice}원</span>
          {/* <span className={styles.productContent__salePrice}>할인가</span> */}
        </div>
      </div>

    }

  </>
}

export default ProductContent;