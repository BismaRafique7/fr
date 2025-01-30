import React from 'react'
import Headar from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import b from '../Pages/ksimg/2.PNG';
import c from '../Pages/ksimg/3.PNG';
import d from '../Pages/ksimg/4.PNG';
import e from '../Pages/ksimg/5.PNG';
import f from '../Pages/ksimg/1.PNG';
import g from '../Pages/ksimg/7.PNG';
import h from '../Pages/ksimg/8.PNG';
import i from '../Pages/ksimg/9.PNG';
import j from '../Pages/ksimg/10.PNG';
import k from '../Pages/ksimg/11.PNG';
import l from '../Pages/ksimg/12.PNG';


const booksData = [
  { name: "ksn1", image: b, price: "$10" },
  { name: "ksn2", image: c, price: "$12" },
  { name: "ksn3", image: d, price: "$15" },
  { name: "ksn4", image: e, price: "$8" },
  { name: "ksn5", image: f, price: "$10" },
  { name: "ksn6", image: g, price: "$10" },
  { name: "ksn7", image: h, price: "$12" },
  { name: "ksn8", image: i, price: "$15" },
  { name: "ksn9", image: j, price: "$8" },
  { name: "ksn10", image: k, price: "$10" },
  { name: "ksn11", image: l, price: "$10" },
];

function KSneakers({ addToCart }) {
  return (
    <div class="Main">
    <Headar />
    <Catagory heading="Sneakers" books={booksData} addToCart={addToCart} />
    <Footer/>  
    </div>
    
  )
}

export default KSneakers