import Product from '../../components/Product/Product';
import testImg from '../../assets/image 26.svg'

const FeedProduct = () => {
  const data = [
    { id: 0, productName: '껌', img: testImg, brand: '브랜드임', price: 4500 },
    { id: 1, productName: '사료', img: testImg, brand: '사료 브랜드임', price: 5000 }
  ]

  return <>
    <div>
      <Product data={data} />
    </div>
  </>
};

export default FeedProduct;