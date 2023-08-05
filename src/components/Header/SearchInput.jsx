import React, { useRef, useState } from 'react';

//components
import Input from '../../common/Input/Input';
import { debounce } from 'lodash';
import usePathMove from '../../hooks/usePathMove';

import styles from '../../styles/css/components/Header/searchInput.module.css';

//icon
import {GoSearch} from "react-icons/go";

//헤더 검색창
const SearchInput = () => {
  const inputRef = useRef(null);
  const move = usePathMove();

  const [search , setSearch] = useState("");
  // const {name} = Input;
  const userSearch = (e) => {
    console.log("inputRef.current.value::",inputRef.current.value)
    setSearch(inputRef.current.value);
    // console.log(e.target.value);
  };

  const getInputValueInfo = debounce(userSearch, 300);
  return (
    <div className={styles.search_wrap}>
      <Input
      type= "text"
      name = "productName"
      placeholder="우리 댕냥 알러지 없는 사료" 
      className="searchInput"
      ref={inputRef} 
      onChange={getInputValueInfo}
      />
    
      <GoSearch className={styles.search_button} onClick={()=>{
        if(search.length==0) return;
        move("/product/search", {search}, true)}}></GoSearch> 
    </div>
  );
};


export default SearchInput;