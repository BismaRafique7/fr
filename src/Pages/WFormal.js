import React from 'react'
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/WFormal/1.PNG';
import b from '../Pages/WFormal/2.PNG';
import c from '../Pages/WFormal/3.PNG';
import d from '../Pages/WFormal/4.PNG';
import e from '../Pages/WFormal/5.PNG';
import f from '../Pages/WFormal/6.PNG';
import g from '../Pages/WFormal/7.PNG';
import h from '../Pages/WFormal/8.PNG';
import i from '../Pages/WFormal/9.PNG';
import j from '../Pages/WFormal/10.PNG';
import k from '../Pages/WFormal/11.PNG';
import l from '../Pages/WFormal/12.PNG';




const booksData = [
    { name: "wf1", image: a , price: "$10" },
  { name: "wf2", image: b  , price: "$10"},
  { name: "wf3", image: c , price: "$10" },
  { name: "wf4", image: d , price: "$10" },
  { name: "mf5", image: e , price: "$10" },
  { name: "mf6", image: f  , price: "$10"},
  { name: "mf7", image: g  , price: "$10"},
  { name: "mf8", image: h  , price: "$10"},
  { name: "mf9", image: i  , price: "$10"},
  { name: "mf10", image: j  , price: "$10"},
  { name: "mf11", image: k , price: "$10" },
  { name: "mf12", image: l , price: "$10" },
];

function WFormal({ addToCart }) {
    return (
      <div className="Main"> 
        <Header />
        <Catagory heading="Women Formal" books={booksData} addToCart={addToCart}/>
        <Footer />
      </div>
    );
  }
  
  export default WFormal;