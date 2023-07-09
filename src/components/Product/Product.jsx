import styles from '../../styles/css/components/Product/Product.module.css'
import ProductItem from '../../components/Card/ProductItem'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { ClickHook } from '../../hooks/ClickHook/ClickHook'
import { useState } from 'react';
import { BiCheck } from "react-icons/bi";

const ListItem = ({value, onClick, isChecked}) => {
  return (
    <li className={styles.selectDrop__list__option} style={{color: isChecked ? 'black':'gray'}} onClick={onClick}>
      {isChecked && 
      <BiCheck className={styles.selectDrop__list__option__check}/>
      }
      {value}
    </li>
  )
}

const Product = (props) => {

  const [click, checkClick] = ClickHook(false)

  const [selectedValue, setSelectedValue] = useState('베스트');

  const handleItemClick = (value) => {
    setSelectedValue(value);
    //필터api호출
    checkClick()
  };

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
      <ul className={styles.selectDrop__list}>
        <ListItem value="베스트" isChecked={selectedValue === "베스트"} onClick={() => handleItemClick("베스트")}/>

        <ListItem value="최신순" isChecked={selectedValue === "최신순"} onClick={() => handleItemClick("최신순")}/>
      </ul>
    </div> }

    <div className={styles.container}>
      <ProductItem></ProductItem>
    </div>

  </div>
  
  </>
}

export default Product;