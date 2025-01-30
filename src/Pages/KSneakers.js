import React from 'react'
import Headar from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import b from '../Pages/images/451-7298-_2.webp';
import c from '../Pages/images/520-0131_1_545x545.webp';
import d from '../Pages/images/520-0137_1_545x545.webp';
import e from '../Pages/images/520-1127-_1_545x545.webp';
import f from '../Pages/images/520-1140_1_545x545.webp';
import g from '../Pages/images/520-3137_1_545x545.webp';
import h from '../Pages/images/520-7136_1_545x545.webp';
import i from '../Pages/images/520-9131_1_545x545.webp';
import j from '../Pages/images/528-9846-_1_545x545.webp';
import k from '../Pages/images/551-9228-_1_545x545.webp';
import l from '../Pages/images/551-9676-_1.webp';


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