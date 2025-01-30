import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.css'; 
import Header from '../Components/Headar'; 
import Footer from '../Components/Footer';
import shoe1 from './kpimg/5.PNG';
import shoe2 from './kcimg/2.PNG';
import shoe4 from './kschoolimg/4.PNG';
import shoe3 from './ksimg/12.PNG';

function Kids() {
  return (
    <div className="kids-page">  
      <Header />
      <div className="kids-content">
        <h2 className="kids-heading">Kids Footwear Categories</h2>
        <div className="link-container">
        <Link to="/Peshwari" className="category-link"><center><img src={shoe1} />Peshwari</center></Link>
        <Link to="/Sandals" className="category-link"><center><img src={shoe2} />Sandals</center></Link>
        <Link to="/School" className="category-link"><center><img src={shoe4} />School</center></Link>
        <Link to="/Sneakers" className="category-link"><center><img src={shoe3} />Sneakers</center></Link> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kids;
