import styles from '../../styles/css/components/Cart/CartModal.module.css'
import { IoMdClose } from "react-icons/io";
import Image from '../../common/Img/Image';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, increase, decrease } from '../../store/Slice/CartSlice';
import Button from '../../common/Button/Button';
import usePathMove from '../../hooks/usePathMove';
import { addPriceComma } from '../../utils/addPriceComma';

const CarModal = () => {
  const move = usePathMove()
  const cartData = useSelector((state) => { return state.cart.cartItem }) //cart api가져오기
  const dispatch = useDispatch()

  return <>
    <div className={styles['container']}>
      <div className={styles['cart-container']}>
        <p>장바구니</p>
        {
          cartData.length == 0 ?
            <div className={styles['empty-modal']}>
              장바구니가 비었습니다.
            </div> :
            cartData.map((d) => {
              const formattedPrice = addPriceComma(d.productPrice * d.count)
              return (
                <div key={d.id} className={styles['cart-container__insideBg']}>
                  <IoMdClose onClick={() => dispatch(removeCart(d))} className={styles['cart-container__insideBg--icon']}></IoMdClose>
                  <div className={styles['cart-container__insideBg--content']}>
                    <div className={styles['cart-container__insideBg--content__img']}>
                      <Image src={d.productImage} className="img-100"></Image>
                    </div>
                    <div className={styles['cart-container__insideBg--content__text']}>
                      <p>{d.brandName}</p>
                      <h3>{d.productName}</h3>
                    </div>
                  </div>
                  <div className={styles['cart-container__insideBg--bottomContent']}>
                    <div className={styles['cart-container__insideBg--bottomContent__left']}>
                      <Button className="cart-btn-count" onClick={() => {
                        dispatch(decrease(d))
                      }} title="-"></Button>
                      <span>{d.count}</span>
                      <Button className="cart-btn-count" onClick={() => {
                        dispatch(increase(d))
                      }} title="+"></Button>
                    </div>
                    <div></div>
                    <span style={{ fontSize: '20px' }}>{formattedPrice}원</span>
                  </div>
                </div>
              )
            })
        }

        {
          cartData.length > 0 ? <Button className="cart-pay-btn" title={"결제하기"} onClick={() => move('/payments/all')}></Button> : ''
        }


      </div>
    </div>
  </>
}

export default CarModal