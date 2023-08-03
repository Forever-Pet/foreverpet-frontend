import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./Home";
import Login from "./User/Login";
import Join from "./User/Join";
import KakaoCallback from "../components/Auth/Kakao/KakaoCallback";
// import ProductList from "./Product/ProductList";

// import FeedProduct from "./Product/FeedProduct";
import SearchInput from '../components/Header/SearchInput';
import ProductDetail from "./Product/ProductDetail";
import Payments from "./Payments/Payments";
import PaymentsAll from "./Payments/PaymentsAll";
import Modify from "./Member/Modify";
import OrderHistory from "./Member/OrderHistory";
import PageNotFound from "./PageNotFound/PageNotFound";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/join" element={<Join />} />
          <Route path="/oauth/kakaoCallback" element={<KakaoCallback />} />
          {/* <Route path="/product/:category" element={<ProductList />} /> */}

          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/member/modify" element={<Modify />} />
          <Route path="Header/searchInput" element={<SearchInput/>}/>
          <Route path="/payments/all" element={<PaymentsAll />} />
          <Route path="/member/modify/password" element={<Modify />} />
          <Route path="/member/modify/delivery" element={<Modify />} />
          <Route path="/member/orderhistory" element={<OrderHistory />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route />
        </Routes>
      )}
    </>
  );
};

export default Router;
