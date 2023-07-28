import ProductItem from "../Card/ProductItem"
import testImg from '../../assets/image 26.svg'

const WishList = () => {
  const data = [
    { id: 0, productName: '껌', img: testImg, brand: '브랜드임', price: 4500 },
    { id: 1, productName: '사료', img: testImg, brand: '사료 브랜드임', price: 5000 }
  ]

  return <>
    <div>
      <ProductItem data={data} className="container"></ProductItem>
    </div>
  </>
}

export default WishList