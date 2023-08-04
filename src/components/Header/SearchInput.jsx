import React, { useRef, useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import usePathMove from '../../hooks/usePathMove';

//헤더 검색창
const SearchInput = () => {
  const inputRef = useRef(null);
  const move = usePathMove();

  const [search , setSearch] = useState({name: ""});
  const {name} = Input;
  const userSearch = (e) => {
    const {name,value} = e.target;
   
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const getInputValueInfo = debounce(userSearch, 300);
  return (
    <form>
      <Input
      type= "text"
      name = "productName"
      placeholder="우리 댕냥 알러지 없는 사료" 
      className="searchInput"
      ref={inputRef} 
      value={name}
      onChange={getInputValueInfo}
      />
       
      <Button type="button" className='search_button' onClick={()=>{
        if(search.length==0) return;
        move("/product/search", {search}, true)}}></Button> 
    </form>
  );
};


export default SearchInput;