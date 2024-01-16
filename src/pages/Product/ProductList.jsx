import { useLocation, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import useGetProductData from "../../hooks/useGetProductData";

const ProductList = () => {
  //전달받은 타이틀(한글명), 카테고리 전달
  const location = useLocation();
  const title = location.state.title;

  //url파라미터로 해당 카테고리 데이터 가져옴
  const param = useParams();
  const category = param.category;

  const [data, getData] = useGetProductData();

  return (
    <>
      <div>
        <Product
          data={data}
          getData={getData}
          title={title}
          category={category}
        />
      </div>
    </>
  );
};

export default ProductList;
