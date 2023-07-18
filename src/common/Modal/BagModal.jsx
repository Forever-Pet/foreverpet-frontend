import styles from '../../styles/css/commons/BagModal.module.css'
import DefaultModal from './DefaultModal';
import Image from '../Img/Image';
import Button from '../Button/Button'
import { IoMdClose } from "react-icons/io";
import ProductContent from '../../components/Card/ProductContent';
import { useDispatch } from 'react-redux';
import { putIn } from '../../store/Slice/CartSlice';

const BagModal = (props) => {
  const dispatch = useDispatch()

  if (!props.isOpen) {
    return null;
  }
  return <>
    <DefaultModal className='Modal-baground__container'>
      <IoMdClose className={styles['bag-closeBtn']} onClick={props.onClose}></IoMdClose>
      <div style={{ clear: 'both' }}></div>
      <h2>장바구니 담기</h2>
      <div className={styles['product-content']}>
        <div className={styles['product-content__img']}>
          <Image src={props.data[props.id].img} className="bagModal-img"></Image>
        </div>
        <ProductContent data={props.data[props.id]}></ProductContent>
      </div>
      <div className={styles['bag-btn']}>
        <Button onClick={props.onClose} className='bag-detail-btn' title={'자세히 보기'} />
        <Button onClick={() => {
          //장바구니에 담음
          props.onContinue()
          dispatch(putIn(props.data[props.id]))
        }
        } className='bag-inside-btn' title={'장바구니 담기'} />
      </div>

    </DefaultModal>





  </>
}

export default BagModal;