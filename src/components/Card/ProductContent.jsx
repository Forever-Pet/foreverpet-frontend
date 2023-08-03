//css
import styles from '../../styles/css/components/Card/ProductContent.module.css'
import { addPriceComma } from '../../utils/addPriceComma';


const ProductContent = (props) => {
  const formattedPrice = addPriceComma(props.data.productPrice)

  return <>
    {
      props.data && <div className={styles.productContent}>
        <p className={styles.productContent__brandName}>{props.data.brandName}</p>
        <h4 className={styles.productContent__productName}>{props.data.productName}</h4>
        <div>
          <span className={`${styles.productContent__sale} ${styles.productContent__sale__orange}`}></span>
          <span className={styles.productContent__sale}>{formattedPrice}원</span>
          {/* <span className={styles.productContent__salePrice}>할인가</span> */}
        </div>
      
      </div>
    }

  </>
}

export default ProductContent;