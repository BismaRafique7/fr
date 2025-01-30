import React from 'react';
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/WSandals/1.PNG'; // Update path for women's images
import b from '../Pages/WSandals/2.PNG';
import c from '../Pages/WSandals/3.PNG';
import d from '../Pages/WSandals/4.PNG';
import e from '../Pages/WSandals/5.PNG';
import f from '../Pages/WSandals/6.PNG';
import g from '../Pages/WSandals/7.PNG';
import h from '../Pages/WSandals/8.PNG';
import i from '../Pages/WSandals/9.PNG';
import j from '../Pages/WSandals/10.PNG';
import k from '../Pages/WSandals/11.PNG';
import l from '../Pages/WSandals/12.PNG';

const booksData = [
    { name: "wsa1", image: a , price: "$10"},
    { name: "wsa2", image: b , price: "$10"},
    { name: "wsa3", image: c , price: "$10"},
    { name: "wsa4", image: d , price: "$10"},
    { name: "wsa5", image: e , price: "$10"},
    { name: "wsa6", image: f , price: "$10"},
    { name: "wsa7", image: g , price: "$10"},
    { name: "wsa8", image: h , price: "$10"},
    { name: "wsa9", image: i , price: "$10"},
    { name: "wsa10", image: j , price: "$10"},
    { name: "wsa11", image: k , price: "$10"},
    { name: "wsa512", image: l , price: "$10"},
];

function WSandals({ addToCart }) {
  return (
    <div className="Main"> 
      <Header />
      <Catagory heading="Women Sandals" books={booksData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default WSandals;
