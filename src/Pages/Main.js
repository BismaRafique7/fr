import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Main.css'; 

function Main({ heading, shoes }) {
  const handleAddToCart = (shoeName) => {
    alert(`${shoeName} added to cart!`);
  };

  const handleBuyNow = (shoeName) => {
    alert(`Proceeding to checkout for ${shoeName}!`);
  };

  return (
    <div className="section-container">
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <h2>{heading}</h2>
      <div className="image-scroll">
        {shoes.map((shoe, index) => (
          <div className="image-item" key={index}>
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <button className="add-to-cart" onClick={() => handleAddToCart(shoe.name)}>Add to Cart</button>
            <button className="buy-now" onClick={() => handleBuyNow(shoe.name)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
