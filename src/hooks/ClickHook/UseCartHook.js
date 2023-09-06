import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/Slice/ModalSlice";
import { useCartDataHook } from "../useCartDataHook";
import { useGetMemberData } from "../useGetMemberData";
import { cartIsOpen } from "../../store/Slice/ModalSlice";

export const useCartHook = () => {
  const cartData = useSelector((state) => { return state.cart.cartItem })
  const dispatch = useDispatch()
  // const { data: cart, CartData } = useCartDataHook()

  const ckBag = (data) => {
    if (cartData !== null) {
      const i = cartData.find((a) => { return a.productName == data.productName }) //있는 상품인지 확인하기
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