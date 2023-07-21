import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Pages
import Home from './Home';
import Login from './User/Login';
import Join from './User/Join';
import KakaoCallback from '../components/Auth/Kakao/KakaoCallback';
import FeedProduct from './Product/FeedProduct';
import ProductDetail from './Product/ProductDetail';
import ProductPayments from './Product/Payments/ProductPayments';
import PageNotFound from './PageNotFound/PageNotFound';

// Test
import PaymentsAmountInfo from '../components/Payments/PaymentsAmountInfo'; // 결제 페이지 금액 정보창
import OrderList from '../components/Card/OrderList/OrderList';

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
          <Route path="/product/payments" element={<ProductPayments />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/test" element={<OrderList />} />
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
