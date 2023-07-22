import styles from '../../styles/css/components/Card/ProductItem.module.css'
import Image from '../../common/Img/Image'
import { BsHeart, BsFillHeartFill, BsHandbag, BsHandbagFill } from "react-icons/bs";
import { UsehandleWishBag } from '../../hooks/ClickHook/UsehandleWishBag'
import { UseCartHook } from '../../hooks/ClickHook/UseCartHook'
import ProductContent from './ProductContent'
import { useSelector } from 'react-redux';


const ProductItem = (props) => {
  const cartData = useSelector((state) => { return state.cart.cartItem })

  const [IsWishlist, handleWishlist] = UsehandleWishBag()
  const { ckBag } = UseCartHook()


  //아이콘 체크 여부, 데이터 들어 있으면 색상 변경, 아니면 빈 아이콘
  const iconCk = (id) => {
    const i = cartData.findIndex((a) => { return a.id == id })
    if (i == -1) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div className={styles[props.className || ""]}>
        {
          props.data.map((d, i) => {
            return (
              <div key={d.id} className={styles.productItem}>
                <div className={styles.productItem__img}>
                  <Image src={d.img} />
                  <div onClick={() => handleWishlist(d.id)}
                    className={`${styles.productItem__img__button} ${styles.productItem__img__button__heart}`}>
                    {IsWishlist(d.id) ? (<BsFillHeartFill className={`${styles.productItem__img__button__icon} ${styles.productItem__img__button__heart__fill}`} />) : (<BsHeart className={styles.productItem__img__button__icon} />)}
                  </div>

                  <div onClick={() =>
                    ckBag(d)
                  }
                    className={`${styles.productItem__img__button} ${styles.productItem__img__button__bag}`}>
                    {iconCk(d.id) ?
                      (<BsHandbagFill className={styles.productItem__img__button__icon} />) : (<BsHandbag className={styles.productItem__img__button__icon} />)
                    }
                  </div>
                </div>
                <ProductContent data={props.data[i]}></ProductContent>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ProductItem;