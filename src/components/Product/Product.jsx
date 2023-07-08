import styles from '../../styles/css/components/Product/Product.module.css'
import ProductItem from '../../components/Card/ProductItem'

const Product = (props) => {
  return <>
  <div className={styles.base}>
    <div>
        <h1>사료</h1>
        <span style={ {float: 'left'} }>11개의 상품</span>
        <span style={ {float:'right'} }>베스트상품순</span>
        <div style={ {clear:'both'} }></div>
        <hr></hr>
    </div>
    <ProductItem></ProductItem>
  </div>
  
  </>
}

export default Product;