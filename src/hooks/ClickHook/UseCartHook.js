import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/Slice/ModalSlice";
import { useGetMemberData } from "../useGetMemberData";

export const useCartHook = () => {
  const cartData = useSelector((state) => { return state.cart.cartItem })
  const dispatch = useDispatch()
  const { data: cart } = useGetMemberData('user/cart', 'post')

  const ckBag = (data) => {
    if (cart !== null) {
      const i = cart.find((a) => { return a.id == data.id }) //있는 상품인지 확인하기
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

  }

  return { ckBag }
}