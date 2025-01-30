import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.css'; 
import Header from '../Components/Headar'; 
import Footer from '../Components/Footer';
import shoe1 from './MFormal/1.PNG';
import shoe2 from './Mloungewear/1.PNG';
import shoe3 from './MSandels/3.PNG';
import shoe4 from './MSenekers/1.PNG';

function Men() {
  return (
    <div >  
      <Header />
      <h2 className="kids-heading">Men Footwear Categories</h2>
      <div className="link-container">
        <Link to="/MFormal" className="category-link"><center><img src={shoe1} />Formal</center></Link>
        <Link to="/Mloungewear" className="category-link"><center><img src={shoe2} />loungewear</center></Link>
        <Link to="/MSandels" className="category-link"><center><img src={shoe3} />Sandels</center></Link>
        <Link to="/MSenekers" className="category-link"><center><img src={shoe4} />Senekers</center></Link>  
      </div>
      <Footer />
    </div>
  );
}

export default Men;
