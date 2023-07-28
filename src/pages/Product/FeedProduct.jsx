import Product from '../../components/Product/Product';
import useGetProductData from '../../hooks/useGetProductData';

const FeedProduct = () => {

  const [data] = useGetProductData('products', 'FOOD')

  return <>
    <div>
      <Product data={data} />
    </div>
  </>
};

export default FeedProduct;