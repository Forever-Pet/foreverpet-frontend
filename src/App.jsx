// Router
import Router from "./pages/Router";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Router element={<Home></Home>} />
    </div>
  );
};

export default App;
