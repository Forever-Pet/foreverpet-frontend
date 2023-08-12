import { useDispatch, useSelector } from "react-redux";
import { useCartHook } from "./useCartHook";

export const useHandleWishBag = () => {

  const cartData = useSelector((state) => { return state.cart.cartItem })
  const wishData = useSelector((state) => { return state.wish.wishItem })
  const auth = useSelector((state) => { return state.auth.token })
  const { ckBag } = useCartHook()
  const dispatch = useDispatch()

  const iconCk = (id, d) => {
    if (d == 'cart') {
      const i = cartData.findIndex((a) => { return a.id == id })
      if (i == -1) {
        return false
      } else {
        return true
      }
    } else if (d == 'wish') {
      const i = wishData.findIndex((a) => { return a.id == id })
      if (i == -1) {
        return false
      } else {
        return true
      }
    }
  }

  const isLogin = (data, wish = false) => {
    if (auth == 'null') {
      alert('로그인이 필요합니다.')
    } else {
      if (wish) {
        dispatch(wishPutIn(data))
      } else {
        ckBag(data)
      }
    }
  }


  return [iconCk, isLogin]
}