// BuyNowPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './BuyNowPage.css';

function BuyNowPage() {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <div>No book selected. Please go back and select a book.</div>;
  }

  return (
    <div className="buy-now-page">
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} className="book-image" />
      <p>{book.description}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <button className="proceed-checkout" onClick={() => alert("Proceeding to checkout!")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default BuyNowPage;
