import { useGetMemberData } from "../../hooks/useGetMemberData";

import ProductItem from "../Card/ProductItem";

const WishList = () => {
  const {data} = useGetMemberData('user/wish', 'post')


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
