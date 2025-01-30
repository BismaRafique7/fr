import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.css'; 
import Header from '../Components/Headar'; 
import Footer from '../Components/Footer';
import shoe1 from './WFormal/1.PNG';
import shoe2 from './Wloungewear/2.PNG';
import shoe4 from './WSandals/4.PNG';
import shoe3 from './WSneakers/12.PNG';

function Women() {
  return (
    <div >  
      <Header />
      <h2 className="kids-heading">Woman Footwear Categories</h2>
      <div className="link-container">
        <Link to="/WFormal" className="category-link"><center><img src={shoe1} />Formal</center></Link>
        <Link to="/Wloungewear" className="category-link"><center><img src={shoe2} />loungewear</center></Link>
        <Link to="/WSandals" className="category-link"><center><img src={shoe4} />Sandels</center></Link>
        <Link to="/WSneakers" className="category-link"><center><img src={shoe3} />Senekers</center></Link>  
      </div>
      <Footer />
    </div>
  );
}

export default Women;
