import React, { useRef, useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

//헤더 검색창
const SearchInput = () => {

  const inputRef = useRef(null);
    const focusHandler = () => {
    	inputRef.current.foucus();
    };

  const [search , setSearch] = useState({name: ""});
  const { name} = Input;
  const userSearch = (e) => {
    const {name,value} = e.target;
   
    setSearch({...search,[name]:value});
    console.log(e.target.value);
  };
  // const onReset = () => {
  //   setSearch("");
  // }
  return (
    <form>
      <Input
      type= "text"
      name = "productName"
      placeholder="우리 댕냥 알러지 없는 사료" 
      className="searchInput"
      ref={inputRef} 
      value={name}
      onChange={userSearch}
      /> 
      
      <Button type="button" onClick={focusHandler}>focus</Button> 
    </form>
  );
};


export default SearchInput;