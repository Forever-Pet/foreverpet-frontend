import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import {useMediaQuery} from 'react-responsive';

//css
import styles from '../styles/css/pages/Home.module.css';

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
  return (
  <div className={styles.home}>
    <div>
    <Header></Header>
    </div>
    <Mobile>mobile</Mobile>
    <PC>pc</PC>
    <div>
    <Footer/>
    </div>
    
  </div>
  );
};

export default Home;
