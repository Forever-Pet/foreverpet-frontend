import ProductItem from "../Card/ProductItem";

const WishList = (props) => {
  return (
    <>
      {props.data && (
        <div>
          <ProductItem
            data={props.data}
            className="container-4columns"
          ></ProductItem>
        </div>
      )}
    </>
  );
};

export default WishList;
