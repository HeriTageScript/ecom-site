import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './cart'
import Footer from './footer'
import Header from './Header'
import Shop from './Shop'

function App() {
  return (
    <Router>
      <>
        <link href="https://db.onlinewebfonts.com/c/f1fcc5aed1e20fc0cdb9f8a7573625bd?family=Integral+CF+Regular" rel="stylesheet"></link>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701&display=swap" rel="stylesheet"></link>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />

        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App
