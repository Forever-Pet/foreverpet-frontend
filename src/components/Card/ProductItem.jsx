import styles from '../../styles/css/components/Card/ProductItem.module.css'
import Image from '../../common/Img/Image'
import { BsHeart, BsFillHeartFill, BsHandbag, BsHandbagFill } from "react-icons/bs";
import { usehandleWishBag } from '../../hooks/ClickHook/usehandleWishBag'
import { useCartHook } from '../../hooks/ClickHook/useCartHook'
import ProductContent from './ProductContent'
import { useDispatch } from 'react-redux';
import BagModal from '../../common/Modal/BagModal';
import usePathMove from '../../hooks/usePathMove';
import { wishPutIn } from '../../store/Slice/wishSlice';

const ProductItem = (props) => {
  const move = usePathMove()

  const dispatch = useDispatch()

  const [iconCk] = usehandleWishBag()
  const { ckBag } = useCartHook()


  return (
    <>
      <div className={styles[props.className || ""]}>
        {
          props.data &&
          props.data.map((d, i) => {

            return (
              <div key={i} className={styles.productItem} onClick={() =>
                move('/product/detail/' + d.id)
              }>
                <div className={styles.productItem__img}>
                  <Image src={d.productImage} />
                  <div onClick={(e) => {
                    e.stopPropagation()
                    dispatch(wishPutIn(d))
                  }}
                    className={`${styles.productItem__img__button} ${styles.productItem__img__button__heart}`}>
                    {iconCk(d.id, 'wish') ? (<BsFillHeartFill className={`${styles.productItem__img__button__icon} ${styles.productItem__img__button__heart__fill}`} />) : (<BsHeart className={styles.productItem__img__button__icon} />)}
                  </div>

                  <div onClick={(e) => {
                    e.stopPropagation()
                    ckBag(d)
                  }
                  }
                    className={`${styles.productItem__img__button} ${styles.productItem__img__button__bag}`}>
                    {iconCk(d.id, 'cart') ?
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
      <BagModal />
    </>
  )
}

export default ProductItem;