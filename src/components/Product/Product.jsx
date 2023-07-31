import styles from '../../styles/css/components/Product/Product.module.css'
import ProductItem from '../../components/Card/ProductItem'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { UseClickHook } from '../../hooks/ClickHook/useClickHook'
import ProductFilter from './ProductFilter';
import { useState } from 'react';
import TemporaryHeader from '../Header/TemporaryHeader';
import Title from '../../common/Title/Title'
import { useEffect } from 'react';
import useGetProductData from '../../hooks/useGetProductData';

const Product = (props) => {
  const [click, checkClick] = UseClickHook(false)
  const [selectedValue, setSelectedValue] = useState('추천순');
  const [title, setTitle] = useState('')

  const [data, getData] = useGetProductData('products', `${props.title}`)

  useEffect(() => {
    switch (props.title) {
      case 'SNACK':
        setTitle('간식')
        break;
      case 'BITA':
        setTitle("건강보조제")
        break;
      case 'FOOD':
        setTitle('사료')
    }
  }, [title])

  useEffect(() => {
    switch (selectedValue) {
      case '추천순':
        getData('products', `${props.title}`)
        break;
      case '베스트':
        getData('products/best', `${props.title}`)
        break;
      case '최신순':
        getData('products/new', `${props.title}`)
    }
  }, [selectedValue])


  return <>
    <TemporaryHeader></TemporaryHeader>
    {
      data && <div className={styles.base}>
        <div>
          <Title className="product-title" title={title}></Title>
          <div className={styles.filterBox}>
            <span>{data.length}개</span>
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
        <ProductItem data={data} className='container-4columns'></ProductItem>
      </div>
    }


  </>
}

export default Product;