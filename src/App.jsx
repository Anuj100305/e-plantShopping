import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="*" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
