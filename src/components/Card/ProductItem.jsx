import styles from '../../styles/css/components/Card/ProductItem.module.css'
import Image from '../../common/Img/Image'
import { BsHeart, BsFillHeartFill, BsHandbag, BsHandbagFill } from "react-icons/bs";
import { UsehandleWishBag } from '../../hooks/ClickHook/UsehandleWishBag'
import BagModal from '../../common/Modal/BagModal'
import { useState } from 'react';
import InsideBag from '../../common/Modal/InsideBag';
import ProductContent from './ProductContent'
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../store/Slice/CartSlice';


const ProductItem = (props) => {
  const cartData = useSelector((state) => { return state.cart.cartItem })
  console.log(cartData)
  const dispatch = useDispatch()

  const [IsWishlist, handleWishlist] = UsehandleWishBag()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNextModalOpen, setIsNextModalOpen] = useState(false);
  const [id, setid] = useState('')

  //장바구니 클릭시 상품값 배열로 들어가고 모달 오픈
  const handleAddToCart = () => {
    setIsModalOpen((prev) => !prev);
  };

  //첫번째 모달 닫는 함수
  const handleCloseModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  //장바구니에 담으면 첫번째 모달 닫고 두번째 모달 오픈
  const handleContinue = () => {
    setIsModalOpen((prev) => !prev);
    setIsNextModalOpen((prev) => !prev);
  };

  //두번째 모달과 첫번째 모달 둘다 닫음
  const handleCloseNextModal = () => {
    setIsNextModalOpen((prev) => !prev);
  };

  //아이콘 클릭시 모달 열고 데이터 담을 수 있게 하는 함수
  const ckBag = (id) => {
    const i = cartData.findIndex((a) => { return a.id == id })
    if (i == -1) { //데이터 없으면 열어서 데이터 담음
      handleAddToCart()
    } else { //있으면 리스트에서 삭제시킴(아이콘 해제 시켜야 하니)
      dispatch(removeCart(id))
    }
  }

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

                  <div onClick={() => {
                    ckBag(d.id)
                    setid(d.id)
                  }}
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

      {isModalOpen &&
        <BagModal isOpen={isModalOpen}
          id={id}
          data={props.data}
          onClose={handleCloseModal}
          onContinue={handleContinue} />
      }
      {
        isNextModalOpen &&
        <InsideBag onClose={handleCloseNextModal}
        ></InsideBag>
      }
    </>
  )
}

export default ProductItem;