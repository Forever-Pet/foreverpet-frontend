import styles from '../../styles/css/components/Product/Product.module.css'
import ProductItem from '../../components/Card/ProductItem'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { UseClickHook } from '../../hooks/ClickHook/UseClickHook'
import ProductFilter from './ProductFilter';
import { useState } from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
import CartModal from '../../common/Modal/CartModal';
import testImg from '../../assets/image 26.svg'

const Product = (props) => {
  const [click, checkClick] = UseClickHook(false)
  const [bagClick, setBagClick] = UseClickHook(false)
  const [selectedValue, setSelectedValue] = useState('베스트');
  const data = [
    { id: 0, productName: '껌', img: testImg, brand: '브랜드임', price: '4,500' },
    { id: 1, productName: '사료', img: testImg, brand: '사료 브랜드임', price: '5,000' }
  ]

  return <>
    <div className={styles.header}>
      <LiaShoppingBagSolid onClick={setBagClick} className={styles['header--icon']}></LiaShoppingBagSolid>
      <div style={{ clear: 'both' }}></div>
    </div>
    {
      bagClick ? <CartModal /> : ''
    }

    <div className={styles.base}>
      <div>
        <h1>제품명</h1>
        <div className={styles.filterBox}>
          <span>상품 개수</span>
          <div className={styles.filterBox__filter} onClick={checkClick}>
            <span>{selectedValue}</span>
            {click ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
        </div>
        <hr></hr>
      </div>

      {click && <div className={styles.selectDrop__cont}>
        <ProductFilter selectedValue={selectedValue} setSelectedValue={setSelectedValue} checkClick={checkClick}></ProductFilter>
      </div>}
      <ProductItem data={data} className='container'></ProductItem>

    </div>




  </>
}

export default Product;