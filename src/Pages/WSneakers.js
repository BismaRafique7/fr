import React from 'react';
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/WSneakers/1.PNG';
import b from '../Pages/WSneakers/2.PNG';
import c from '../Pages/WSneakers/3.PNG';
import d from '../Pages/WSneakers/4.PNG';
import e from '../Pages/WSneakers/5.PNG';
import f from '../Pages/WSneakers/6.PNG';
import g from '../Pages/WSneakers/7.PNG';
import h from '../Pages/WSneakers/8.PNG';
import i from '../Pages/WSneakers/9.PNG';
import j from '../Pages/WSneakers/10.PNG';
import k from '../Pages/WSneakers/11.PNG';
import l from '../Pages/WSneakers/12.PNG';

const booksData = [
  { name: "wsn1", image: a  , price: "$10"},
  { name: "wsn2", image: b  , price: "$10"},
  { name: "wsn3", image: c  , price: "$10"},
  { name: "wsn4", image: d  , price: "$10"},
  { name: "wsn5", image: e  , price: "$10"},
  { name: "wsn6", image: f  , price: "$10"},
  { name: "wsn7", image: g  , price: "$10"},
  { name: "wsn8", image: h  , price: "$10"},
  { name: "wsn9", image: i , price: "$10" },
  { name: "wsn10", image: j  , price: "$10"},
  { name: "wsn11", image: k  , price: "$10"},
  { name: "wsn12", image: l  , price: "$10"},
];

function WSneakers({ addToCart }) {
  return (
    <div className="Main">
      <Header />
      <Catagory heading="Women Sneakers" books={booksData} addToCart={addToCart}/>
      <Footer />
    </div>
  );
}

export default WSneakers;
