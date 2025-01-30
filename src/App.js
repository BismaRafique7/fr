import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Kids from './Pages/Kids';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Peshwari from './Pages/KPeshwari';
import Sandals from './Pages/KSandals';
import School from './Pages/KSchool';
import Sneakers from './Pages/KSneakers';
import MFormal from './Pages/MFormal';
import Mloungewear from './Pages/Mloungewear';
import MSandels from './Pages/MSandels';
import MSenekers from './Pages/MSenekers';
import WFormal from './Pages/WFormal';
import Wloungewear from './Pages/Wloungewear';
import WSandals from './Pages/WSandals';
import WSneakers from './Pages/WSneakers';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import CartComponent from './Pages/CartComponent';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.name === product.name);
      if (itemExists) {
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    window.alert("Data successfully added!");
  };

  const increaseQuantity = (productName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productName) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.name === productName && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        
        <Route 
          path="/cart" 
          element={<CartComponent 
            cartItems={cartItems} 
            increaseQuantity={increaseQuantity} 
            decreaseQuantity={decreaseQuantity} 
          />} 
        />

        <Route path="/Peshwari" element={<Peshwari addToCart={addToCart} />} />
        <Route path="/Sandals" element={<Sandals addToCart={addToCart}/>} />
        <Route path="/School" element={<School addToCart={addToCart}/>} />
        <Route path="/Sneakers" element={<Sneakers addToCart={addToCart}/>} />

        <Route path="/MFormal" element={<MFormal addToCart={addToCart}/>} />
        <Route path="/Mloungewear" element={<Mloungewear addToCart={addToCart}/>} />
        <Route path="/MSandels" element={<MSandels addToCart={addToCart}/>} />
        <Route path="/MSenekers" element={<MSenekers addToCart={addToCart}/>} />

        <Route path="/WFormal" element={<WFormal addToCart={addToCart}/>} />
        <Route path="/Wloungewear" element={<Wloungewear addToCart={addToCart}/>} />
        <Route path="/WSandals" element={<WSandals addToCart={addToCart}/>} />
        <Route path="/WSneakers" element={<WSneakers addToCart={addToCart}/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
