import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './CartComponent.css';
import Header from '../Components/Headar';
import Footer from '../Components/Footer';
const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await axios.get('http://localhost:3001/cart');
      setCartItems(response.data);
    };

    fetchCartItems();
  }, []);

  const increaseQuantity = async (name) => {
    const item = cartItems.find(item => item.name === name);
    if (item) {
      await axios.post('http://localhost:3001/cart/add', { ...item, quantity: 1 });
      setCartItems(prev =>
        prev.map(i => (i.name === name ? { ...i, quantity: i.quantity + 1 } : i))
      );
    }
  };

  const decreaseQuantity = async (name) => {
    const item = cartItems.find(item => item.name === name);
    if (item.quantity > 1) {
      await axios.post('http://localhost:3001/cart/add', { ...item, quantity: -1 });
      setCartItems(prev =>
        prev.map(i => (i.name === name ? { ...i, quantity: i.quantity - 1 } : i))
      );
    } else {
      await axios.delete(`http://localhost:3001/cart/remove/${name}`);
      setCartItems(prev => prev.filter(i => i.name !== name));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.slice(1)) || 0;
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div>
    <Header />
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.name)}>+</button>
            <button onClick={() => decreaseQuantity(item.name)}>-</button>
          </div>
        ))
      )}
      <h3>Total Bill: ${calculateTotal()}</h3>
      <Link to="/checkout" state={{ cartItems }}>
          <button className="checkout-button">Proceed to Checkout</button>
        </Link>
    </div>
    <Footer />
    </div>
  );
};

export default CartComponent;