import React from 'react';
import {useMediaQuery} from 'react-responsive';
import Layout from './Layout/Layout';

//모바일
export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });
  return <>{isMobile && children}</>
}

//pc 
export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });
  return <>{isPc && children}</>
}

const Home = () => {
  return <div>
    <Layout>
    <Mobile>mobile</Mobile>
    <PC>pc</PC>
    </Layout>
    
    </div>
};

export default Home;
