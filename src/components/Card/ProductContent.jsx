import styles from '../../styles/css/components/Card/ProductContent.module.css'

const ProductContent = (props) => {

  return <>
    {
      props.data && <div className={styles.productContent}>
        <p className={styles.productContent__brandName}>{props.data.brand}</p>
        <h3 className={styles.productContent__productName}>{props.data.productName}</h3>
        <div>
          <span className={`${styles.productContent__sale} ${styles.productContent__sale__orange}`}>할인율</span>
          <span className={styles.productContent__sale}>{props.data.price}원</span>
          {/* <span className={styles.productContent__salePrice}>할인가</span> */}
        </div>
      </div>

    }

  </>
}

export default ProductContent;