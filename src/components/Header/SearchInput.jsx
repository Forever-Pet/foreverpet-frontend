import React, { useRef, useState } from 'react';

//components
import Input from '../../common/Input/Input';
import { debounce } from 'lodash';
import usePathMove from '../../hooks/usePathMove';

//css
import styles from '../../styles/css/components/Header/searchInput.module.css';

//icon
import {GoSearch} from "react-icons/go";

//헤더 검색창
const SearchInput = () => {
  const inputRef = useRef(null);
  const move = usePathMove();
  const [search , setSearch] = useState("");

  const userSearch = (e) => {
    setSearch(inputRef.current.value);
  };
   //엔터 두번해야 이동함
  const handleOnkeyPress = e => {
    if(e.key === 'Enter') {
      move("/product/search", {search}, true)
    }
  };

  const getInputValueInfo = debounce(userSearch, 300);
  return (
    <div className={styles.search_wrap} onKeyDown={handleOnkeyPress}>
      <Input
      type= "text"
      name = "productName"
      placeholder="우리 댕냥 알러지 없는 사료" 
      className="searchInput"
      ref={inputRef} 
      onChange={getInputValueInfo}
      />
    
      <GoSearch className={styles.search_button} onClick={handleOnkeyPress}></GoSearch> 
    </div>
  );
};


export default SearchInput;