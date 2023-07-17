import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./Home";
import Login from "./User/Login";
import Join from "./User/Join";
import PageNotFound from "./PageNotFound/PageNotFound";
import FeedProduct from "./Product/FeedProduct";
import ProductDetail from "./Product/ProductDetail";
import KakaoCallback from "../components/Auth/Kakao/KakaoCallback";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/feed" element={<FeedProduct />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/join" element={<Join />} />
          <Route path="/test" element={<ProductDetail />} />
          <Route path="/oauth/kakaoCallback" element={<KakaoCallback />} />
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
