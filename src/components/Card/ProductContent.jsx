//css
import styles from '../../styles/css/components/Card/ProductContent.module.css'
import styles1 from '../../styles/css/components/Home/bestitem.module.css';

const ProductContent = (props) => {
  const formattedPrice = (props.data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return <>
    {
      props.data && <div className={styles.productContent}>
        <p className={styles.productContent__brandName}>{props.data.brand}</p>
        <h3 className={styles.productContent__productName}>{props.data.productName}</h3>
        <div>
          <span className={`${styles.productContent__sale} ${styles.productContent__sale__orange}`}>SALE</span>
          <span className={styles.productContent__sale}>{formattedPrice}원</span>
          {/* <span className={styles.productContent__salePrice}>할인가</span> */}
        </div>
        {/* <div className={styles1.productinfo_2}>
          <p>{props.data.best}</p>
          <p className={styles1.productinfo_2_2}>{props.data.sale}</p>
        </div>  */}
      </div>
    }

  </>
}

export default ProductContent;