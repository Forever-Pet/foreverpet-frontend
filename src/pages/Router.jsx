import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./Home";
import PageNotFound from "./PageNotFound/PageNotFound";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);
  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element=''/>
          <Route path="/" element=''/>
          <Route path="/" element=''/>
          <Route path="/" element=''/>
          <Route path="/" element=''/>
          <Route path="/" element=''/>
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
