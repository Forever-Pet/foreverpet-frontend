import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/Slice/ModalSlice";

export const UseCartHook = () => {
  const cartData = useSelector((state) => { return state.cart.cartItem })
  const dispatch = useDispatch()

  const ckBag = (data) => {
    const i = cartData.find((a) => { return a.id == data.id })
    if (i == undefined) { //데이터 없으면 열어서 데이터 담음
      dispatch(openModal({
        data: data
      }))

    } else { //있으면 리스트에서 삭제시킴(아이콘 해제)
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