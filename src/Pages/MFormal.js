import React from 'react'
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/MFormal/1.PNG';
import b from '../Pages/MFormal/2.PNG';
import c from '../Pages/MFormal/3.PNG';
import d from '../Pages/MFormal/4.PNG';
import e from '../Pages/MFormal/5.PNG';
import f from '../Pages/MFormal/6.PNG';
import g from '../Pages/MFormal/7.PNG';
import h from '../Pages/MFormal/8.PNG';
import i from '../Pages/MFormal/9.PNG';
import j from '../Pages/MFormal/10.PNG';
import k from '../Pages/MFormal/11.PNG';
import l from '../Pages/MFormal/12.PNG';




const booksData = [
    { name: "mf1", image: a , price: "$10" },
  { name: "mf2", image: b , price: "$10"},
  { name: "mf3", image: c , price: "$10"},
  { name: "mf4", image: d , price: "$10"},
  { name: "mf5", image: e , price: "$10"},
  { name: "mf6", image: f, price: "$10" },
  { name: "mf7", image: g , price: "$10"},
  { name: "mf8", image: h, price: "$10" },
  { name: "mf9", image: i, price: "$10" },
  { name: "mf10", image: j , price: "$10"},
  { name: "mf11", image: k , price: "$10"},
  { name: "mf12", image: l , price: "$10"},
];

function MFormal({ addToCart }) {
  return (
    <div class="Main">
    <Header/>
    <Catagory heading="Men Formal" books={booksData} addToCart={addToCart}/>
    <Footer/>  
    </div>
    
  )
}

export default MFormal