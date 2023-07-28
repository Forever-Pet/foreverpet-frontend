import styles from '../../styles/css/components/Card/ProductItem.module.css'
import Image from '../../common/Img/Image'
import { BsHeart, BsFillHeartFill, BsHandbag, BsHandbagFill } from "react-icons/bs";
import { UsehandleWishBag } from '../../hooks/ClickHook/usehandleWishBag'
import { UseCartHook } from '../../hooks/ClickHook/useCartHook'
import ProductContent from './ProductContent'
import { useSelector } from 'react-redux';
import BagModal from '../../common/Modal/BagModal';
import usePathMove from '../../hooks/usePathMove';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const ProductItem = (props) => {
  const move = usePathMove()
  const cartData = useSelector((state) => { return state.cart.cartItem })

  const [IsWishlist, handleWishlist] = UsehandleWishBag()
  const { ckBag } = UseCartHook()
  const [ckIcon, setIcon] = useState('')


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
          props.data &&
          props.data.map((d, i) => {
            return (

              <div key={d.id} className={styles.productItem} onClick={() => {
                move('/product/detail/' + d.id)
              }}>
                <div className={styles.productItem__img}>
                  <Image src={d.productImage} />
                  <div onClick={(e) => {
                    e.stopPropagation()
                    handleWishlist(d.id)
                  }}
                    className={`${styles.productItem__img__button} ${styles.productItem__img__button__heart}`}>
                    {IsWishlist(d.id) ? (<BsFillHeartFill className={`${styles.productItem__img__button__icon} ${styles.productItem__img__button__heart__fill}`} />) : (<BsHeart className={styles.productItem__img__button__icon} />)}
                  </div>

                  <div onClick={(e) => {
                    e.stopPropagation()
                    ckBag(d)
                  }
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
      <BagModal />
    </>
  )
}

export default ProductItem;