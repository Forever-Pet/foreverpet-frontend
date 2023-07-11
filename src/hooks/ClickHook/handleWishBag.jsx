import { useState } from "react";

export const handleWishBag = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleToggleList = (productId) => {
    if (wishlist.includes(productId)) { //찜 해제
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const isList = (id) => { 
      return wishlist.includes(id)
  }


  return [isList, handleToggleList]
}