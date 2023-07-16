import styles from '../../styles/css/commons/BagModal.module.css'
import DefaultModal from './DefaultModal';
import Image from '../Img/Image';
import Button from '../Button/Button'
import testImg from '../../assets/image 26.svg'
import { IoMdClose } from "react-icons/io";
import ProductContent from '../../components/Card/ProductContent';

const BagModal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return <>
    <DefaultModal className='Modal-baground__container'>
      <IoMdClose className={styles['bag-closeBtn']} onClick={props.onClose}></IoMdClose>
      <h2>장바구니 담기</h2>
      <div className={styles['product-content']}>
        <div className={styles['product-content__img']}>
          <Image src={testImg}></Image>
        </div>
        <ProductContent></ProductContent>
      </div>
      <div className={styles['bag-btn']}>
        <Button onClick={props.onClose} className='bag-detail-btn' title={'자세히 보기'} />
        <Button onClick={() => {
          if (!props.IsBagList) {
            props.onContinue()
            props.handleBaglist(1)
          }
        }
        } className='bag-inside-btn' title={'장바구니 담기'} />
      </div>

    </DefaultModal>





  </>
}

export default BagModal;