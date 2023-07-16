import styles from '../../styles/css/components/Card/ProductItem.module.css'
import Image from '../../common/Img/Image'
import item from '../../assets/image 26.svg'
import { BsHeart, BsFillHeartFill, BsHandbag, BsHandbagFill } from "react-icons/bs";
import { UsehandleWishBag } from '../../hooks/ClickHook/UsehandleWishBag'
import BagModal from '../../common/Modal/BagModal'
import { useState } from 'react';
import { UseClickHook } from '../../hooks/ClickHook/UseClickHook';
import InsideBag from '../../common/Modal/InsideBag';
import ProductContent from './ProductContent'


const ProductItem = (props) => {

  const [IsWishlist, handleWishlist] = UsehandleWishBag()
  const [IsBaglist, handleBaglist] = UsehandleWishBag()

  const [isModalOpen, setIsModalOpen] = UseClickHook(false);
  const [isNextModalOpen, setIsNextModalOpen] = UseClickHook(false);

  //장바구니 클릭시 상품값 배열로 들어가고 모달 오픈
  const handleAddToCart = () => {
    setIsModalOpen();
  };

  //첫번째 모달 닫는 함수
  const handleCloseModal = () => {
    setIsModalOpen();
  };

  //장바구니에 담으면 첫번째 모달 닫고 두번째 모달 오픈
  const handleContinue = () => {
    setIsModalOpen();
    setIsNextModalOpen();
  };

  //두번째 모달과 첫번째 모달 둘다 닫음
  const handleCloseNextModal = () => {
    setIsNextModalOpen();
  };

  //장바구니 확인 함수
  const checkBag = (id) => {
    if (!IsBaglist(id)) {
      handleAddToCart()
    } else {
      handleBaglist(id)
    }
  }

  return (
    <>
      <div className={styles[props.className || ""]}>
        <div className={styles.productItem}>
          <div className={styles.productItem__img}>
            <Image src={item} />
            <div onClick={() => handleWishlist(1)} className={`${styles.productItem__img__button} ${styles.productItem__img__button__heart}`}>
              {IsWishlist(1) ? (<BsFillHeartFill className={`${styles.productItem__img__button__icon} ${styles.productItem__img__button__heart__fill}`} />) : (<BsHeart className={styles.productItem__img__button__icon} />)}
            </div>

            <div onClick={() => checkBag(1)} className={`${styles.productItem__img__button} ${styles.productItem__img__button__bag}`}>
              {IsBaglist(1) ? (<BsHandbagFill className={styles.productItem__img__button__icon} />) : (<BsHandbag className={styles.productItem__img__button__icon} />)}
            </div>
            {isModalOpen && <BagModal isOpen={isModalOpen} IsBagList={IsBaglist(1)} handleBaglist={handleBaglist} onClose={handleCloseModal} onContinue={handleContinue} />
            }
          </div>
          {
            isNextModalOpen && <InsideBag onClose={handleCloseNextModal}></InsideBag>
          }
          <ProductContent></ProductContent>
        </div>
      </div>



    </>
  )
}

export default ProductItem;