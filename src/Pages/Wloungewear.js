import React from 'react';
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/Wloungewear/1.PNG'; 
import b from '../Pages/Wloungewear/2.PNG';
import c from '../Pages/Wloungewear/3.PNG';
import d from '../Pages/Wloungewear/4.PNG';
import e from '../Pages/Wloungewear/5.PNG';
import f from '../Pages/Wloungewear/6.PNG';
import g from '../Pages/Wloungewear/7.PNG';
import h from '../Pages/Wloungewear/8.PNG';
import i from '../Pages/Wloungewear/9.PNG';
import j from '../Pages/Wloungewear/10.PNG';
import k from '../Pages/Wloungewear/11.PNG';
import l from '../Pages/Wloungewear/12.PNG';

const booksData = [
    { name: "wl1", image: a , price: "$10"},
    { name: "wl2", image: b , price: "$10"},
    { name: "wl3", image: c , price: "$10"},
    { name: "wl4", image: d , price: "$10"},
    { name: "wl5", image: e , price: "$10"},
    { name: "wl6", image: f , price: "$10"},
    { name: "wl7", image: g , price: "$10"},
    { name: "wl8", image: h , price: "$10"},
    { name: "wl9", image: i , price: "$10"},
    { name: "wl10", image: j , price: "$10"},
    { name: "wl11", image: k , price: "$10"},
    { name: "wl12", image: l , price: "$10"},
];

function Wloungewear({ addToCart }) {
  return (
    <div className="Main"> 
      <Header />
      <Catagory heading="Women Loungewear" books={booksData} addToCart={addToCart}/>
      <Footer />
    </div>
  );
}

export default Wloungewear;
