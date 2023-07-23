import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./Home";
import PageNotFound from "./PageNotFound/PageNotFound";
import FeedProduct from "./Product/FeedProduct";
import OrderHistory from "./Member/OrderHistory"

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);
  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/feed" element={<FeedProduct />} />
          <Route path="/member/orderhistory" element={<OrderHistory />} />
          <Route />
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
