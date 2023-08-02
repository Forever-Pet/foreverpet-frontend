import Product from '../../components/Product/Product';
import useGetProductData from '../../hooks/useGetProductData'

const ProductList = () => {
  // const location = useLocation();
  // const title = location.state
  //전달받은 타이틀(한글명), 카테고리 전달
  // const param = useParams()
  // const category = param.category
  const [data, getData] = useGetProductData('products', 'FOOD')

  return <>
    <div>
      <Product data={data} getData={getData} />
    </div>
  </>
};

export default ProductList;