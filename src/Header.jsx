import React, { useState } from 'react';
import shoppingCart from './assets/shoppingCart.svg';
import profile from './assets/profile.svg';
import search from './assets/search.svg';
import './index.css';
import {Link} from 'react-router-dom'
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      {/* Mobile Menu Button */}
      <div className="mobile-head">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <Link className='second-logo' to='/'><h1 >SHOP.CO</h1></Link>
        <div className="second-header-icons">
            <Link to='/cart'><img src={shoppingCart} alt="Shopping Cart" /></Link>
            <img src={profile} alt="Profile" />
        </div>

      </div>
      

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <h1>SHOP.CO</h1>
        <ul>
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </div>

      {/* Header Content (For Larger Screens) */}
      <div className="head">
      <Link to='/'><h1>SHOP.CO</h1></Link>
        <ul>
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="search-div">
          <img src={search} alt="Search Icon" />
          <input
            className="search"
            type="text"
            placeholder="Search for products..."
          />
        </div>
        <div className="header-icons">
          <Link to='/cart'><img src={shoppingCart} alt="Shopping Cart" /></Link>
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
