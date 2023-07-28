import Product from '../../components/Product/Product';
import useGetData from '../../hooks/useGetData';

const FeedProduct = () => {

  const [data] = useGetData('products', 'FOOD')

  return <>
    <div>
      <Product data={data} />
    </div>
  </>
};

export default FeedProduct;