import React from 'react'
import Header from '../Components/Headar';
import Catagory from '../Components/Catagory';
import Footer from '../Components/Footer';
import a from '../Pages/Mloungewear/1.PNG';
import b from '../Pages/Mloungewear/2.PNG';
import c from '../Pages/Mloungewear/3.PNG';
import d from '../Pages/Mloungewear/4.PNG';
import e from '../Pages/Mloungewear/5.PNG';
import f from '../Pages/Mloungewear/6.PNG';
import g from '../Pages/Mloungewear/7.PNG';
import h from '../Pages/Mloungewear/8.PNG';
import i from '../Pages/Mloungewear/9.PNG';
import j from '../Pages/Mloungewear/10.PNG';
import k from '../Pages/Mloungewear/11.PNG';
import l from '../Pages/Mloungewear/12.PNG';




const booksData = [
  { name: "ml1", image: a , price: "$10"},
  { name: "ml2", image: b , price: "$10"},
  { name: "ml3", image: c, price: "$10" },
  { name: "ml4", image: d, price: "$10" },
  { name: "ml5", image: e, price: "$10" },
  { name: "ml6", image: f, price: "$10" },
  { name: "ml7", image: g, price: "$10" },
  { name: "ml8", image: h , price: "$10"},
  { name: "ml9", image: i, price: "$10" },
  { name: "ml10", image: j, price: "$10" },
  { name: "ml11", image: k , price: "$10"},
  { name: "ml12", image: l , price: "$10"},
];

function Mloungewear({ addToCart }) {
  return (
    <div class="Main">
    <Header/>
    <Catagory heading="Men Loungewear" books={booksData} addToCart={addToCart}/>
    <Footer/>  
    </div>
    
  )
}

export default Mloungewear