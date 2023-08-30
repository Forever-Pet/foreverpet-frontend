import { useWishHook } from "../../hooks/useWishHook";
import ProductItem from "../Card/ProductItem";

const WishList = () => {

const {data} = useWishHook()

  return (
    <>
      {data && (
        <div>
          <ProductItem
            data={data}
            className="container-4columns"
          ></ProductItem>
        </div>
      )}
    </>
  );
};

export default WishList;
