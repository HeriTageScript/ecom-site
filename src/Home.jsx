import HomeBody from './HomeBody';
import { useState } from 'react';
const Home = ({cart, addToCart}) => {
  
  return (
    <>
      <HomeBody 
        cart={cart}
        addToCart={addToCart}
      />
    </>
  );
}

export default Home;