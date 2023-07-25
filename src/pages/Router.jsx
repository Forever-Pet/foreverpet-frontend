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
import Modify from "./Member/Modify";
import PageNotFound from "./PageNotFound/PageNotFound";

// Test
import PaymentsAmountInfo from "../components/Payments/PaymentsAmountInfo"; // 결제 금액 정보창
import PaymentsOrderInfo from "../components/Payments/PaymentsOrderInfo"; // 결제 주문상품 컴포넌트
import PaymentsOwnerInfo from "../components/Payments/PaymentsOwnerInfo"; // 결제 주문자 정보 컴포넌트
import PaymentsDeliveryInfo from "../components/Payments/PaymentsDeliveryInfo"; // 결제 배송지 정보 컴포넌트
import PaymentsType from "../components/Payments/PaymentsType"; // 결제수단 컴포넌트

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
          {/* <Route path="/member/modify" element={<Modify />} /> */}
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
