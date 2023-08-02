import { BiCheck } from "react-icons/bi";
import styles from '../../styles/css/components/Product/ProductFilter.module.css'

const ProductFilter = (props) => {
  const filterData = ["추천순", "베스트", "최신순"]

  const handleItemClick = (value) => { //클릭한 필터로 보이게 설정
    props.setSelectedValue(value);
    props.checkClick()
  };

  const isChecked = (data) => {
    return props.selectedValue === data
  }

  return (
    <>
      <ul className={styles.selectDrop__list}>
        {filterData.map((d, i) => {
          return (
            <li key={i} className={styles.selectDrop__list__option} style={{ color: isChecked(d) ? 'black' : 'gray' }} onClick={() => handleItemClick(d)}>
              {isChecked(d) &&
                <BiCheck className={styles.selectDrop__list__option__check} />}
              {d}
            </li>
          )
        })
        }
      </ul>
    </>
  )
}

export default ProductFilter;