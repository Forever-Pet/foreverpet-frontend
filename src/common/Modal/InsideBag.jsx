import styles from "../../styles/css/commons/InsideBag.module.css";
import DefaultModal from "./DefaultModal";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { secondModalClose } from "../../store/Slice/ModalSlice";
import { cartIsOpen } from "../../store/Slice/ModalSlice";
const InsideBag = () => {
  const modalState = useSelector((state) => {
    return state.modal.modalState;
  });
  const dispatch = useDispatch();

  return (
    <>
      {modalState.secondOpen && (
        <DefaultModal className="InseideBag__container">
          <h2>장바구니에 상품이 담겼습니다.</h2>
          <div className={styles["product-content"]}>
            <p>지금 장바구니를 확인하겠습니까?</p>
          </div>
          <div className={styles["bag-btn"]}>
            <Button
              onClick={() => dispatch(secondModalClose())}
              className="bag-detail-btn"
              title={"취소"}
            />
            <Button
              onClick={() => {
                dispatch(secondModalClose());
                dispatch(cartIsOpen(true));
              }}
              className="bag-inside-btn"
              title={"확인하기"}
            />
          </div>
        </DefaultModal>
      )}{" "}
    </>
  );
};

export default InsideBag;
