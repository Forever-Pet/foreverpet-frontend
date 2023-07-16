import styles from '../../styles/css/commons/InsideBag.module.css'
import DefaultModal from './DefaultModal';
import Button from '../Button/Button'
const InsideBag = (props) => {
  return <>
    <DefaultModal className='InseideBag__container'>
      <h2>장바구니에 상품이 담겼습니다.</h2>
      <div className={styles['product-content']}>
        <p>지금 장바구니를 확인하겠습니까?</p>
      </div>
      <div className={styles['bag-btn']}>
        <Button onClick={props.onClose} className='bag-detail-btn' title={'취소'} />
        <Button onClick={props.onClose
          //링크이동 코드 필요
        } className='bag-inside-btn' title={'확인하기'} />
      </div>

    </DefaultModal>
  </>
}

export default InsideBag;