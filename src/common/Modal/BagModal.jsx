import styles from '../../styles/css/commons/BagModal.module.css'
import DefaultModal from './DefaultModal';
import Image from '../Img/Image';
import Button from '../Button/Button'
import { IoMdClose } from "react-icons/io";
import ProductContent from '../../components/Card/ProductContent';
import { useDispatch, useSelector } from 'react-redux';
import { putIn } from '../../store/Slice/CartSlice';
import { closeModal, secondModalOpen } from '../../store/Slice/ModalSlice';
import InsideBag from './InsideBag';

const BagModal = () => {
  const modalState = useSelector((state) => { return state.modal.modalState })
  const dispatch = useDispatch()

  return <>
    {modalState.isOpen &&
      <DefaultModal className='Modal-baground__container'>
        <IoMdClose className={styles['bag-closeBtn']} onClick={() => dispatch(closeModal())}></IoMdClose>
        <div style={{ clear: 'both' }}></div>
        <h2>{modalState.title || "장바구니 담기"}</h2>
        {
          modalState.title ? <p className={styles['duplicate-alert']}>상품을 추가 등록하시겠습니까?</p> : <div className={styles['product-content']}>
            <div className={styles['product-content__img']}>
              <Image src={modalState.data.img} className="img-100"></Image>
            </div>
            <ProductContent data={modalState.data}></ProductContent>
          </div>
        }
        <div className={styles['bag-btn']}>
          <Button onClick={() => dispatch(closeModal())} className='bag-detail-btn' title={modalState.leftBtn || '자세히 보기'} />
          <Button onClick={() => {
            //장바구니에 담음
            dispatch(putIn(modalState.data))
            dispatch(secondModalOpen())
          }
          } className='bag-inside-btn' title={modalState.rightBtn || '장바구니 담기'} />
        </div>
      </DefaultModal>
    }

    <InsideBag />
  </>
}

export default BagModal;