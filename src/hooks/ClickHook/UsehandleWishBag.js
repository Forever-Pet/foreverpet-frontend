import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishPutIn } from "../../store/Slice/wishSlice";
import { useGetMemberData } from "../useGetMemberData";
import { useCartHook } from "./useCartHook";

export const useHandleWishBag = () => {

  const cartData = useSelector((state) => { return state.cart.cartItem })
  const wishData = useSelector((state) => { return state.wish.wishItem })
  const auth = useSelector((state) => { return state.auth.token })
  const { ckBag } = useCartHook()
  const dispatch = useDispatch()
  // const { data: wish } = useGetMemberData('user/wish', 'post')
  // const { data: cart } = useGetMemberData('user/cart', 'post')
  const { data, postData } = useGetMemberData()

  const iconCk = (id, d) => {

    if (d == 'cart') {
      postData('user/cart')
      console.log(data)
      // if (data !== null) {
      //   const i = data.findIndex((a) => { return a.id == id })

      //   if (i == -1) {
      //     return false
      //   } else {
      //     return true
      //   }
      // }

    } else if (d == 'wish') {
      postData('user/wish')
      // if (data !== null) {
      //   const i = data.findIndex((a) => { return a.id == id })

      //   if (i == -1) {
      //     return false
      //   } else {
      //     return true
      //   }
      // }

    }
  }

  const isLogin = (data, wish = false) => {
    if (auth == null || auth == "") {
      alert('로그인이 필요합니다.')
    } else {
      if (wish) {
        postData(`user/wish/${data}`)
      } else {
        ckBag(data)
      }
    }
  }


  return [iconCk, isLogin]
}