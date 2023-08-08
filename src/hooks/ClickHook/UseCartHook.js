import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/Slice/ModalSlice";

export const UseCartHook = () => {
  const cartData = useSelector((state) => { return state.cart.cartItem })
  const dispatch = useDispatch()

  const ckBag = (data) => {
    const i = cartData.find((a) => { return a.id == data.id }) //있는 상품인지 확인하기
    if (i == undefined) { //데이터 없으면 열어서 데이터 담음
      dispatch(openModal({
        data: data
      }))

    } else { //있으면 중복 모달 띄우기
      dispatch(openModal({
        title: "이미 있는 상품입니다.",
        rightBtn: "담기",
        leftBtn: "쇼핑 계속하기",
        data: data
      }))
    }
  }

  return { ckBag }
}