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
  const [cart, setCart] = useState([]); //array in it books in cart

  function addToCart(book) {
    setCart((current) => [...current, book]); //book in cart+new one
  }

  function removeFromCart(index) { // remove only one specific book from cart using its index
    setCart((current) => current.filter((book, i) => i !== index));//keep all books except the one i want to remove 
  } //current in the cart
 
  function clearCart() {
    setCart([]);// empty array 
  } //delete all books in cart 

  return (
    <BrowserRouter basename="/BookHaven">
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books addToCart={addToCart} />} /> //add book to cart 
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        //delete book from the cart by props
        <Route
          path="/order"
          element={<Order cart={cart} clearCart={clearCart} />}
        />
        //to empty the cart by props
      </Routes>
    </BrowserRouter>
  );
}

export default App;
