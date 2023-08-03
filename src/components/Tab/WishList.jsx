import ProductItem from "../Card/ProductItem"
import testImg from '../../assets/image 26.svg'

const WishList = () => {
  const data = [
    { id: 0, productName: '껌', productImage: testImg, brandName: '브랜드임', productPrice: 4500 },
    { id: 1, productName: '사료', productImage: testImg, brandName: '사료 브랜드임', productPrice: 5000 }
  ]

  return <>
    <div>
      <ProductItem data={data} className="container-4columns"></ProductItem>
    </div>
  </>
}

export default WishList