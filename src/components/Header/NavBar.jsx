import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../common/Img/Image';
import CartModal from '../../components/Cart/CartModal';
import { useDispatch, useSelector } from "react-redux";
import { cartIsOpen } from "../../store/Slice/ModalSlice";

// Compoennts
import NavListData from '../Card/NavListArr';
import NavList from '../Card/NavList';
import usePathMove from '../../hooks/usePathMove';
import SearchInput from './SearchInput';

//css 
import styles from '../../styles/css/pages/NavBar.module.css';

//icon
import { RxTextAlignJustify } from "react-icons/rx";
import { BiUser, BiBasket } from "react-icons/bi";

//햄버거 버튼 메뉴 리스트
const NavListArr = () => {
  const pathMove = usePathMove();
  const [currentTab, setTab] = useState(0);
  const selectNavHandler = (index) => {
    setTab(index);
  };

  return (
    <div className={styles.nav_list}>
      {NavListData.map((props, index) => {
        return (
          <div key={index} className={styles.nav_list_item} onClick={() => selectNavHandler(index)}>
            <div to={props.url} className={styles.listItem_name}
              onClick={() => pathMove(props.url, { "title": props.title }, true)}>{props.title}
            </div>
            <Image src={props.img} className='nav_list_img' />
          </div>
        )
      })}
    </div>

  )
}

//검색창
//네비바 햄버거 버튼 옆 메뉴 
const NavBar = () => {
  const [list, setList] = useState(false);
  const [currentNav, setNav] = useState(0);
  const NavHandler = (index) => {
    setNav(index);
  }

  const cartData = useSelector((state) => { return state.cart.cartItem })
  const cartOpen = useSelector((state) => { return state.modal.cartOpen })

  const dispatch = useDispatch()

  return <>
    <div className={styles.nav}>
      <nav className={styles.nav_menu}>
        <div className={`${styles.nav_menu_pro} ${styles.nav_menu1}`} onClick={() => { setList(!list) }} >
          <RxTextAlignJustify className={styles.nav_menu_icon} />
          {list && <NavListArr />}
        </div>
        {NavList.map((tap, index) => {
          return (
            <div key={index} className={styles.nav_menu_pro} onClick={() => NavHandler(index)} >
              {tap.name}
            </div>
          )
        })}
      </nav>
      <div className={styles.navbar_box}>
        <SearchInput />
        <div>
          <Link to="/member/modify" className={styles.navbar_box_icon}>
            <BiUser />
          </Link>
        </div>
        <div className={styles.navbar_box_icon} onClick={() => dispatch(cartIsOpen())}>
          <BiBasket />
          {
            cartData.length > 0 ? <div className={styles['alert-count']}>{cartData.length}</div> : ''
          }
        </div>
      </div>
    </div>
    {
      cartOpen ? <CartModal /> : ''
    }
  </>
};
export default NavBar;
