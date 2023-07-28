import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./Home";
import PageNotFound from "./PageNotFound/PageNotFound";
import Login from "./Login/Login";
import Join from "./Login/Join";
import Order from "./Order/Order";
import Customer from "./Service/Customer";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);
  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/customer" element={<Customer/>}/>
          <Route />
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
