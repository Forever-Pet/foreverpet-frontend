import styles from '../../styles/css/components/Product/Product.module.css'
import ProductItem from '../../components/Card/ProductItem'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { UseClickHook } from '../../hooks/ClickHook/useClickHook'
import ProductFilter from './ProductFilter';
import { useState } from 'react';
import TemporaryHeader from '../Header/TemporaryHeader';
import Title from '../../common/Title/Title'
import { useEffect } from 'react';

const Product = (props) => {
  const [click, checkClick] = UseClickHook(false)
  const [selectedValue, setSelectedValue] = useState('베스트');
  const [title, setTitle] = useState('')

  //test need
  useEffect(() => {
    switch (props.data[0].categories) {
      case SNACK:
        setTitle('간식')
      case BITA:
        setTitle("건강보조제")
      case FOOD:
        setTitle('사료')
    }
  })


  return <>
    <TemporaryHeader></TemporaryHeader>
    {
      props.data && <div className={styles.base}>
        <div>
          <Title className="product-title" title={title}></Title>
          <div className={styles.filterBox}>
            <span>{props.data.length}개</span>
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
        <ProductItem data={props.data} className='container-4columns'></ProductItem>
      </div>
    }


  </>
}

export default Product;