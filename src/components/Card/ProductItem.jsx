import styles from '../../styles/css/components/Card/ProductItem.module.css'
import Image from '../../common/Img/Image'
import item from '../../assets/image 26.svg'
import { BsHeart, BsFillHeartFill, BsHandbag, BsHandbagFill } from "react-icons/bs";
import { handleWishBag } from '../../hooks/ClickHook/handleWishBag'


const ProductItem = (props) => {

  const [IsWishlist, handleWishlist] = handleWishBag()
  const [IsBaglist, handleBaglist] = handleWishBag()

  return (
    <>
      <div className={styles.productItem}>
        <div className={styles.productItem__img}>
          <Image src={item}/>
   
          <div onClick={() => 
          handleWishlist(1)
          } className={`${styles.productItem__img__button} ${styles.productItem__img__button__heart}`}>
          {IsWishlist(1) ? ( <BsFillHeartFill className={`${styles.productItem__img__button__icon} ${styles.productItem__img__button__heart__fill}`} />) : (<BsHeart className={ styles.productItem__img__button__icon}/>)}
          </div>

          <div onClick={() => handleBaglist(1)} className={`${styles.productItem__img__button} ${styles.productItem__img__button__bag}`}>
          {IsBaglist(1) ? ( <BsHandbagFill className={styles.productItem__img__button__icon} />) : (<BsHandbag className={styles.productItem__img__button__icon}/>)}
          </div>
        </div>
        
        <div className={styles.productContent}>
          <p className={styles.productContent__brandName}>브랜드명</p>
          <h3 className={styles.productContent__productName}>상품명</h3>
          <div>
            <span className={ `${styles.productContent__sale} ${styles.productContent__sale__orange}`}>10%</span>
            <span className={styles.productContent__sale}>4,500원</span>
            <span className={styles.productContent__salePrice}>5000원</span>
            </div>
        </div>
      </div>


      <div className={styles.productItem}>
        <div className={styles.productItem__img}>
          <Image src={item}/>
   
          <div onClick={() => 
          handleWishlist(2)
          } className={`${styles.productItem__img__button} ${styles.productItem__img__button__heart}`}>
          {IsWishlist(2) ? ( <BsFillHeartFill className={`${styles.productItem__img__button__icon} ${styles.productItem__img__button__heart__fill}`} />) : (<BsHeart className={ styles.productItem__img__button__icon}/>)}
          </div>

          <div onClick={() => handleBaglist(2)} className={`${styles.productItem__img__button} ${styles.productItem__img__button__bag}`}>
          {IsBaglist(2) ? ( <BsHandbagFill className={styles.productItem__img__button__icon} />) : (<BsHandbag className={styles.productItem__img__button__icon}/>)}
          </div>
        </div>
        
        <div className={styles.productContent}>
          <p className={styles.productContent__brandName}>브랜드명</p>
          <h3 className={styles.productContent__productName}>상품명</h3>
          <div>
            <span className={ `${styles.productContent__sale} ${styles.productContent__sale__orange}`}>10%</span>
            <span className={styles.productContent__sale}>4,500원</span>
            <span className={styles.productContent__salePrice}>5000원</span>
            </div>
        </div>
      </div>

    

    
  
    </>
  )
}

export default ProductItem;