import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';
import Header from '../Components/Headar';
import Footer from '../Components/Footer';

function Checkout() {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };

  const [orders, setOrders] = useState([]); // State to store all orders
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');

  const shippingCost = shippingMethod === 'standard' ? 5.0 : 10.0;

  const productTotal = cartItems.reduce((total, item) => {
    const priceValue = item.price ? parseFloat(item.price.replace('$', '')) : 0;
    return total + priceValue * item.quantity;
  }, 0);

  const total = productTotal + shippingCost;

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3003/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders);
      } else {
        console.error('Failed to fetch orders');
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  // Handle cancel order
  const handleCancelOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:3003/orders/${orderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Order cancelled successfully!');
        fetchOrders(); // Refresh orders after deletion
      } else {
        alert('Error cancelling order.');
      }
    } catch (err) {
      console.error('Error cancelling order:', err);
    }
  };

  // Handle placing an order
  const handlePlaceOrder = async () => {
    const orderDetails = {
      email,
      firstName,
      lastName,
      address,
      city,
      postalCode,
      shippingMethod,
      total,
      cartItems,
    };

    try {
      const response = await fetch('http://localhost:3003/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        fetchOrders(); // Refresh orders after placing a new one
      } else {
        alert('Error placing order.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchOrders(); // Fetch orders when component loads
  }, []);

  return (
    <>
      <Header />
      <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="checkout-content">
          {/* Cart Items Section */}
          <div className="cart-items">
            <h3>Your Cart</h3>
            {cartItems.map((item, index) => {
              const priceValue = parseFloat(item.price.replace('$', ''));
              const itemTotal = priceValue * item.quantity;
              return (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <p>Name: {item.name}</p>
                    <p>Price: ${priceValue.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Subtotal: ${itemTotal.toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
            <p>Product Total: ${productTotal.toFixed(2)}</p>
            <p>Shipping: ${shippingCost.toFixed(2)}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>

          {/* Checkout Form Section */}
          <form className="checkout-form">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
            />
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Postal Code"
              required
            />
            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <option value="standard">Standard</option>
              <option value="express">Express</option>
            </select>
            <button type="button" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </form>

          {/* Orders Section */}
          <div className="orders-section">
            <h3>All Orders</h3>
            {orders.map((order) => (
              <div key={order._id} className="order-item">
                <p>Order ID: {order._id}</p>
                <p>Name: {order.firstName} {order.lastName}</p>
                <p>Total: ${order.total.toFixed(2)}</p>
                <button onClick={() => handleCancelOrder(order._id)}>Cancel Order</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
