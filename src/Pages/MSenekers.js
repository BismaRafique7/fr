import React from 'react'
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/MSenekers/1.PNG';
import b from '../Pages/MSenekers/2.PNG';
import c from '../Pages/MSenekers/3.PNG';
import d from '../Pages/MSenekers/4.PNG';
import e from '../Pages/MSenekers/5.PNG';
import f from '../Pages/MSenekers/6.PNG';
import g from '../Pages/MSenekers/7.PNG';
import h from '../Pages/MSenekers/8.PNG';
import i from '../Pages/MSenekers/9.PNG';
import j from '../Pages/MSenekers/10.PNG';
import k from '../Pages/MSenekers/11.PNG';
import l from '../Pages/MSenekers/12.PNG';




const booksData = [
  { name: "msn1", image: a , price: "$10"},
  { name: "msn2", image: b , price: "$10"},
  { name: "msn3", image: c , price: "$10"},
  { name: "msn4", image: d , price: "$10"},
  { name: "msn5", image: e , price: "$10"},
  { name: "msn6", image: f , price: "$10"},
  { name: "msn7", image: g , price: "$10"},
  { name: "msn8", image: h , price: "$10"},
  { name: "msn9", image: i , price: "$10"},
  { name: "msn10", image: j , price: "$10"},
  { name: "msn11", image: k , price: "$10"},
  { name: "msn12", image: l , price: "$10"},
];

function MSenekers({ addToCart }) {
  return (
    <div class="Main">
    <Header/>
    <Catagory heading="Men Senekers" books={booksData} addToCart={addToCart}/>
    <Footer/>  
    </div>
    
  )
}

export default MSenekers