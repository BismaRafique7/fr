import React from 'react';
import axios from 'axios';
import './Catagory.css';

function Catagory({ heading, books }){
const handleCart = async (book) => {
  try {
    const response = await axios.post('http://localhost:3001/cart/add', {
      name: book.name,
      price: book.price,
      image: book.image,
      quantity: 1,
    });
    console.log("Response from backend:", response.data); // Log the backend response
    alert(`${book.name} added to cart!`);
  } catch (error) {
    console.error('Error adding to cart:', error.response?.data || error.message);
    alert('Failed to add item to cart');
  }
};


  return (
    <div className="section-container">
      <h2>{heading}</h2>
      <div className="image-scroll">
        {books.map((book, index) => (
          <div className="image-item" key={index}>
            <img src={book.image} alt={book.name} />
            <h3>{book.name}</h3>
            <p>Price: {book.price}</p>
            <button className="add-to-cart" onClick={() => handleCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catagory;