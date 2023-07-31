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
import usePathMove from '../../hooks/usePathMove';

const BagModal = () => {
  const modalState = useSelector((state) => { return state.modal.modalState })
  const dispatch = useDispatch()
  const move = usePathMove()
  return <>
    {modalState.isOpen &&
      <DefaultModal className='Modal-baground__container'>
        <IoMdClose className={styles['bag-closeBtn']} onClick={() => dispatch(closeModal())}></IoMdClose>
        <div style={{ clear: 'both' }}></div>
        <h2>{modalState.title || "장바구니 담기"}</h2>
        {
          modalState.title ? <p className={styles['duplicate-alert']}>상품을 추가 등록하시겠습니까?</p> : <div className={styles['product-content']}>
            <div className={styles['product-content__img']}>
              <Image src={modalState.data.productImage} className="img-100"></Image>
            </div>
            <ProductContent data={modalState.data}></ProductContent>
          </div>
        }
        <div className={styles['bag-btn']}>
          <Button onClick={() => {
            if (modalState.leftBtn) {
              dispatch(closeModal())
            } else {
              move('/product/detail/' + modalState.data.id)
            }
          }}
            className='bag-detail-btn'
            title={modalState.leftBtn || '자세히 보기'} />
          <Button onClick={() => {
            //장바구니에 담음
            dispatch(putIn(modalState.data)) //장바구니 api로 post 이미있는 아이템이면 수량 증가, 아니라면 그냥 카트에 넣기
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