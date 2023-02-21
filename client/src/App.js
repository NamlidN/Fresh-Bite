import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Filtered from "./components/filterpage/filtered";
import FilterPage2 from "./components/filterpage/FilterPage2";
import Home from "./pages/Home/Home";
import ProdoctTour from "./components/ProductTour/ProdoctTour";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import Profile from "./pages/Profile/Profile";
import Filter from "./components/filter/Filter";
import { NavBar } from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register.jsx";


function App() {
  return (
    <div className="App">
      {/* <div className="top"></div> */}
      <Router>
        <Routes>
          <Route path="/" element={<ProdoctTour />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="add" element={<Create />} />
          <Route
            path="/home"
            element={
              <>
                <Home />
                <NavBar page={"Home"} />
              </>
            }
          />
          <Route path="/create" element={<Create />} />
          <Route path="/filter" element={<Filter />} />


          <Route path="/filterpage2" element={<FilterPage2 />} />
          <Route path="/filtered" element={<Filtered />} />

          <Route path="/item/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/item/"
            element={
              <>
                <ProductDetail />
                <NavBar page={"item"} />
              </>
            } />
          <Route path="/cart" element={

            <>
              <Cart />
              <NavBar page={"cat"} />
            </>

          } />


          <Route
            path="/wishlist"
            element={
              <>
                <Wishlist />
                <NavBar page={"wishlist"} />
              </>
            }
          />
          <Route
            path="/order-history"
            element={
              <>
                <OrderHistory />
                <NavBar page={"order-history"} />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Profile />
                <NavBar page={"profile"} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
