import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./Home";
import Login from "./User/Login";
import Join from "./User/Join";
import KakaoCallback from "../components/Auth/Kakao/KakaoCallback";
import ProductList from "./Product/ProductList";

import SearchInput from "../components/Header/SearchInput";
import ProductDetail from "./Product/ProductDetail";
import Payments from "./Payments/Payments";
import PaymentsAll from "./Payments/PaymentsAll";
import ModifyDeliveryRegister from "./Member/ModifyDeliveryRegister";
import ModifyPassword from "./Member/ModifyPassword";
import OrderHistory from "./Member/OrderHistory";
import PageNotFound from "./PageNotFound/PageNotFound";
import SearchList from "../components/Header/SearchList";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);

  return (
    <>
      {isInLogged && (
        <Routes>
          // 루트
          <Route path="/" element={<Home />} />
          // 검색
          <Route path="/product/search" element={<SearchList />} />
          {/* <Route path="Header/searchInput" element={<SearchInput />} /> */}
          // 인증인가, oauth
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/join" element={<Join />} />
          <Route path="/oauth/kakaoCallback" element={<KakaoCallback />} />
          // 상품 페이지 및 상세정보
          <Route path="/product/:category" element={<ProductList />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          // 결제
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments/all" element={<PaymentsAll />} />
          // 회원정보수정, Modify
          <Route path="/member/modify/password" element={<ModifyPassword />} />
          <Route
            path="/member/modify/delivery"
            element={<ModifyDeliveryRegister />}
          />
          <Route path="/member/orderhistory" element={<OrderHistory />} />
          // Not Url
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
