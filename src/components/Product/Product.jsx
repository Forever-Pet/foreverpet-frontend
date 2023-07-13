import styles from '../../styles/css/components/Product/Product.module.css'
import ProductItem from '../../components/Card/ProductItem'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { UseClickHook } from '../../hooks/ClickHook/UseClickHook'
import ProductFilter from './ProductFilter';
import { useState } from 'react';
import DefaultModal from '../../common/Modal/DefaultModal'

const Product = (props) => {
  const [click, checkClick] = UseClickHook(false)
  const [selectedValue, setSelectedValue] = useState('베스트');

  return <>
  <div className={styles.base}>
    <div>
        <h1>제품명</h1>
        <div className={styles.filterBox}>
          <span>상품 개수</span>
          <div className={styles.filterBox__filter}  onClick={checkClick}>
            <span>{selectedValue}</span>
            {click ? <MdArrowDropUp />: <MdArrowDropDown />}
          </div>
        </div>
      <hr></hr>
    </div>

    {click &&  <div className={styles.selectDrop__cont}>
     <ProductFilter selectedValue={selectedValue} setSelectedValue={setSelectedValue} checkClick={checkClick}></ProductFilter>
    </div> }

    <div className={styles.container}>
      <ProductItem></ProductItem>
    </div>

  </div>


      <DefaultModal className='localUser-login'>
          <span>dd</span>
      </DefaultModal>

  
  </>
}

export default Product;