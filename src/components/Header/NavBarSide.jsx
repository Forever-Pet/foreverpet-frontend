import React, { useRef, useState , useEffect} from 'react';
import { NavLink } from 'react-router-dom';

//css
import styles from '../../styles/css/pages/NavBarSide.module.css';

//icon 
import { RxCross2 , RxTextAlignJustify } from "react-icons/rx";


const NavBarSide = ({width=280,children}) => {
  const [isOpen , setOpen] = useState(false);
  const [isClose , setClose] = useState(-width);
  const side = useRef();

  //button 클릭 시 토글 메뉴
  const toggleMenu = () => {
    if(isClose < 0) {
      setClose(0);
      setOpen(true);
    }
    else {
      setClose(-width);
      setOpen(false);
    }
  };

  //사이드바 외부 클릭 시 닫히는 함수
  const handleClose = async e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setClose(-width); 
      await setOpen(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })

  return (
   <div className={styles.container}>
      <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '300px',  transform: `translatex(${isClose}px)`}}>
      <div>
      <NavLink to="/food" className={styles.nav_link}>사료</NavLink>
      </div>
      <div>
      <NavLink to="/food" className={styles.nav_link}>간식</NavLink>
      </div>
      <div>
      <NavLink to="/food" className={styles.nav_link}>패션</NavLink>
      </div>
      <div>
      <NavLink to="/food" className={styles.nav_link}>장난감</NavLink>
      </div>
      <div>
      <NavLink to="/food" className={styles.nav_link}>목욕/위생</NavLink>
      </div>
      <div>
      <NavLink to="/food" className={styles.nav_link}>산책/외출</NavLink>
      </div>
      <div>
      <NavLink to="/food" className={styles.nav_link}>건강보조제</NavLink>
      </div>
    
          <button onClick={() => toggleMenu()}
          className={styles.button} >
            {isOpen ? 
            <RxCross2/> : <RxTextAlignJustify className={styles.openBtn}/>
            }
          </button>
       {/* <div className={styles.content}>{children}</div> 사이드바 컴포넌트 내부 값이 구현되는 위치*/}
      </div>
    </div>
  );
};

export default NavBarSide;