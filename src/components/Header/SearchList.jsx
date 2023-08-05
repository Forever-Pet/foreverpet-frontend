import { useEffect } from 'react';
import Product from '../Product/Product';
import { useLocation, useParams } from 'react-router-dom';
import useGetProductData from '../../hooks/useGetProductData';

const SearchList = () => {
  const location = useLocation();
  const title = location.state.search;

  const [data, getData] = useGetProductData(true, title);
  
  return (
    <div>
    <Product data={data} getData={getData} title={title}/>
  </div>
  )
   
};

export default SearchList;