import { useSelector } from "react-redux";

export const UsehandleWishBag = () => {

  const cartData = useSelector((state) => { return state.cart.cartItem })
  const wishData = useSelector((state) => { return state.wish.wishItem })

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

  return [iconCk]
}