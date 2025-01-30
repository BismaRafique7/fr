import React from 'react'
import Headar from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import b from '../Pages/kcimg/2.PNG';
import c from '../Pages/kcimg/3.PNG';
import d from '../Pages/kcimg/4.PNG';
import e from '../Pages/kcimg/5.PNG';
import f from '../Pages/kcimg/1.PNG';
import g from '../Pages/kcimg/7.PNG';
import h from '../Pages/kcimg/8.PNG';
import i from '../Pages/kcimg/9.PNG';
import j from '../Pages/kcimg/10.PNG';
import k from '../Pages/kcimg/11.PNG';
import l from '../Pages/kcimg/12.PNG';


const booksData = [
  { name: "ks1", image: b, price: "$10" },
  { name: "ks2", image: c, price: "$12" },
  { name: "ks3", image: d, price: "$15" },
  { name: "ks4", image: e, price: "$8" },
  { name: "ks5", image: f, price: "$10" },
  { name: "ks6", image: g, price: "$10" },
  { name: "ks7", image: h, price: "$12" },
  { name: "ks8", image: i, price: "$15" },
  { name: "ks9", image: j, price: "$8" },
  { name: "ks10", image: k, price: "$10" },
  { name: "ks11", image: l, price: "$10" },
];

function KSandals({ addToCart }) { // Accept addToCart as a prop
  return (
    <div className="Main">
      <Headar />
      <Catagory heading="Sandals" books={booksData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default KSandals;