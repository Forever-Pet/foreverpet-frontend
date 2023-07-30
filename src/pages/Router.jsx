import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./Home";
import Login from "./User/Login";
import Join from "./User/Join";
import KakaoCallback from "../components/Auth/Kakao/KakaoCallback";
import FeedProduct from "./Product/FeedProduct";

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
          <Route path="/product/feed" element={<FeedProduct />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments/all" element={<PaymentsAll />} />
          <Route path="/member/modify" element={<Modify />} />
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
