import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Cart from './cart';
import Footer from './footer';
import Header from './Header';
import Shop from './Shop';
import Product from './Product';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://olqbscghqffpgdjazdoo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scWJzY2docWZmcGdkamF6ZG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4Mzc1NTYsImV4cCI6MjA1NjQxMzU1Nn0.0Xg9cd4fGSVfEzluTlvHlypmRhEmZ0JVP08l-eYw0og';
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data, error } = await supabase.from("instruments").select();
    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data);
    }
  }
  console.log(products)

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
  const addToCartWithQty = (id, name, price, image, qty) => {
    if (typeof qty !== 'number' || qty <= 0) return;
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + qty } : item
        );
      } else {
        return [...prevCart, { id, name, price, image, qty }];
      }
    });
  };

  const reduceQty = (id) => {
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
  };

  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <>
        <link href="https://db.onlinewebfonts.com/c/f1fcc5aed1e20fc0cdb9f8a7573625bd?family=Integral+CF+Regular" rel="stylesheet"></link>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701&display=swap" rel="stylesheet"></link>
        <Header />
        <Routes>
          <Route path='/' element={<Home cart={cart} addToCart={addToCart} products={products} />} />
          <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} deleteFromCart={deleteFromCart} reduceQty={reduceQty} />} />
          <Route path='/shop' element={<Shop cart={cart} addToCart={addToCart} />} />
          <Route path='/product/:id' element={<Product products={products} cart ={cart} addToCart={addToCartWithQty} />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
