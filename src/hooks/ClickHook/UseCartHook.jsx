import { useState } from "react";
import { useSelector } from "react-redux";

export const UseCartHook = () => {
  const cartData = useSelector((state) => { return state.cart.cartItem })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNextModalOpen, setIsNextModalOpen] = useState(false);
  const [id, setid] = useState('')
  const [title, setTitle] = useState('')
  const [leftbtn, setLeftBtn] = useState('')
  const [rightbtn, setRightBtn] = useState('')


  //장바구니 클릭시 상품값 배열로 들어가고 모달 오픈
  const handleAddToCart = () => {
    setIsModalOpen((prev) => !prev);
  };

  //첫번째 모달 닫는 함수
  const handleCloseModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  //장바구니에 담으면 첫번째 모달 닫고 두번째 모달 오픈
  const handleContinue = () => {
    setIsModalOpen((prev) => !prev);
    setIsNextModalOpen((prev) => !prev);
  };

  //두번째 모달과 첫번째 모달 둘다 닫음
  const handleCloseNextModal = () => {
    setIsNextModalOpen((prev) => !prev);
  };

  const ckBag = (id) => {
    const i = cartData.find((a) => { return a.id == id })
    if (i == undefined) { //데이터 없으면 열어서 데이터 담음
      setTitle("")
      setRightBtn("")
      setLeftBtn("")
      handleAddToCart()
    } else { //있으면 리스트에서 삭제시킴(아이콘 해제)
      setTitle("이미 있는 상품입니다.")
      setRightBtn("담기")
      setLeftBtn("쇼핑 계속하기")
      handleAddToCart()
    }
  }

  return [
    ckBag,
    setid,
    handleCloseModal,
    handleContinue,
    handleCloseNextModal,
    leftbtn,
    rightbtn,
    isModalOpen,
    isNextModalOpen,
    id,
    title
  ]
}