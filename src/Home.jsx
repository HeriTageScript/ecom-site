import HomeBody from './HomeBody';
import { useState } from 'react';
const Home = ({cart, addToCart, products}) => {
  
  return (
    <>
      <HomeBody 
        cart={cart}
        addToCart={addToCart}
        products={products}
      />
    </>
  );
}

export default Home;