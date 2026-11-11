import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart((current) => [...current, book]);
  }

  function removeFromCart(index) {
    setCart((current) => current.filter((book, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/books" element={<Books addToCart={addToCart} />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />

        <Route
          path="/order"
          element={<Order cart={cart} clearCart={clearCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
