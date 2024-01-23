import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../common/Img/Image";
import CartModal from "../../components/Cart/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { cartIsOpen } from "../../store/Slice/ModalSlice";

// Compoennts
import NavListData from "../Card/NavListArr";
import NavList from "../Card/NavList";
import usePathMove from "../../hooks/usePathMove";
import SearchInput from "./SearchInput";

//css
import styles from "../../styles/css/pages/NavBar.module.css";

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
    <div className={styles.product__list}>
      {NavListData.map((props, index) => {
        return (
          <div
            key={index}
            className={styles.product__list_item}
            onClick={() => selectNavHandler(index)}
          >
            <div
              to={props.url}
              className={styles.product__list_item_name}
              onClick={() => pathMove(props.url, { title: props.title }, true)}
            >
              <Image
                src={props.img}
                alt={props.alt}
                className="product__list_img"
              />
              {props.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

//검색창
//네비바 햄버거 버튼 옆 메뉴
const NavBar = () => {
  const [list, setList] = useState(false);
  const [currentNav, setNav] = useState(0);
  const NavHandler = (index) => {
    setNav(index);
  };
  const cartData = useSelector((state) => {
    return state.cart.cartItem;
  });
  const auth = useSelector((state) => {
    return state.auth.token;
  });

  const cartOpen = useSelector((state) => {
    return state.modal.cartOpen;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.service_item}>
        <div className={styles.service_item__column}>
          <div
            className={`${styles.service_item__product} ${styles.service_item__product1}`}
            onClick={() => {
              setList(!list);
            }}
          >
            <RxTextAlignJustify className={styles.service_item__icon} />
            {list && <NavListArr />}
          </div>
          {NavList.map((tap, index) => {
            return (
              <div
                key={index}
                className={styles.service_item__product}
                onClick={() => NavHandler(index)}
              >
                {tap.name}
              </div>
            );
          })}
        </div>
        <div className={styles.content_module}>
          <SearchInput />
          <div>
            <Link
              to="/member/orderhistory"
              className={styles.content_module__service}
            >
              <BiUser />
            </Link>
          </div>
          <div>
            <div
              className={styles.content_module__service}
              onClick={() => {
                dispatch(cartIsOpen());
              }}
            >
              <BiBasket />
              {cartData && cartData.length > 0 && auth && (
                <div className={styles["alert-count"]}>{cartData.length}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {cartOpen == true ? <CartModal /> : ""}
    </>
  );
};
export default NavBar;
