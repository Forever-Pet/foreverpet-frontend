import { useDispatch, useSelector } from "react-redux";
import { wishPutIn } from "../../store/Slice/wishSlice";
import { useGetMemberData } from "../useGetMemberData";
import { useCartHook } from "./useCartHook";

export const useHandleWishBag = () => {
  const cartData = useSelector((state) => {
    return state.cart.cartItem;
  });
  const wishData = useSelector((state) => {
    return state.wish.wishItem;
  });
  const auth = useSelector((state) => {
    return state.auth.token;
  });
  const { ckBag } = useCartHook();
  const dispatch = useDispatch();

  const { DeleteWish, postData } = useGetMemberData();

  const iconCk = (id, d) => {
    if (d == "cart") {
      if (cartData !== null) {
        const i = cartData.findIndex((a) => {
          return a.id == id;
        });

        if (i == -1) {
          return false;
        } else {
          return true;
        }
      }
    } else if (d == "wish") {
      if (wishData !== null) {
        const i = wishData.findIndex((a) => {
          return a == id;
        });
        if (i == -1) {
          return false;
        } else {
          return true;
        }
      }
    }
  };

  const isLogin = (data, wish = false) => {
    if (auth == null || auth == "") {
      alert("로그인이 필요합니다.");
    } else {
      if (wish) {
        const i = wishData.findIndex((a) => {
          return a === data;
        });
        if (i == -1) {
          postData(`user/wish/${data}`);
          dispatch(wishPutIn(data));
        } else {
          DeleteWish(data);
          dispatch(wishPutIn(data));
        }
      } else {
        ckBag(data);
      }
    }
  };

  return [iconCk, isLogin];
};
