import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './cart'
import Footer from './footer'
import Header from './Header'
import Shop from './Shop'
import Product from './Product'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (id, name, price, image) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { id, name, price, image, qty: 1 }];
      }
    });
  };
  function deleteFromCart(id) {
    let newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
    console.log(newCart)
  }
  function  reduceQty(id){
    cart.filter(item => item.id === id)
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem.qty > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== id);
      }
    });
  }

  return (
    <Router>
      <>
        <link href="https://db.onlinewebfonts.com/c/f1fcc5aed1e20fc0cdb9f8a7573625bd?family=Integral+CF+Regular" rel="stylesheet"></link>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701&display=swap" rel="stylesheet"></link>
        <Header/>
        <Routes>
          <Route path='/' element={<Home cart={cart} addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} deleteFromCart={deleteFromCart} reduceQty={reduceQty} />} />
          <Route path='/shop' element={<Shop cart={cart} addToCart={addToCart}/>} />
          <Route path='/product/:id' element={<Product/>} />


        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App
