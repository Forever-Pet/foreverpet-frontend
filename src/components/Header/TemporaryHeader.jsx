import { LiaShoppingBagSolid } from "react-icons/lia";
import CartModal from '../../common/Modal/CartModal';
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/css/components/Header/TemporaryHeader.module.css'
import { cartIsOpen } from "../../store/Slice/CartSlice";

const TemporaryHeader = () => {
  const cartData = useSelector((state) => { return state.cart.cartItem })
  const cartOpen = useSelector((state) => { return state.cart.cartOpen })

  const dispatch = useDispatch()

  return <>
    <div className={styles.header}>
      <div className={styles['header--icon']}>
        <LiaShoppingBagSolid onClick={() => dispatch(cartIsOpen())}></LiaShoppingBagSolid>
        {
          cartData.length > 0 ? <div className={styles['alert-count']}>{cartData.length}</div> : ''
        }
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
    {
      cartOpen ? <CartModal /> : ''
    }
  </>
}

export default TemporaryHeader;