import { LiaShoppingBagSolid } from "react-icons/lia";
import CartModal from '../../common/Modal/CartModal';
import { useSelector } from "react-redux";
import styles from '../../styles/css/components/Header/TemporaryHeader.module.css'
import { UseClickHook } from "../../hooks/ClickHook/UseClickHook";

const TemporaryHeader = () => {
  const cartData = useSelector((state) => { return state.cart.cartItem })
  const [bagClick, setBagClick] = UseClickHook(false)

  return <>
    <div className={styles.header}>
      <div className={styles['header--icon']}>
        <LiaShoppingBagSolid onClick={setBagClick}></LiaShoppingBagSolid>
        {
          cartData.length > 0 ? <div className={styles['alert-count']}>{cartData.length}</div> : ''
        }
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
    {
      bagClick ? <CartModal /> : ''
    }
  </>
}

export default TemporaryHeader;