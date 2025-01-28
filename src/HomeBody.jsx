import './index.css';
import brands from './assets/brands.png';
import groupImg from './assets/group.png';
import analysis from './assets/analysis.png';
import Item from './item';
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

const HomeBody = ({cart, addToCart}) => {
  const [products, setProducts] = useState([]);
  const newArrivalsRef = useRef(null);
  const topSellingRef = useRef(null);
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  useEffect(() => {
    fetch('https://php-for-ecom-site.onrender.com/public/api/getProducts.php')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="section-1">
        <div className="group">
          <h1>
            FIND CLOTHES <br />
            THAT MATCHES
            <br /> YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to='/shop'>
          <button style={{whiteSpace:'nowrap'}}>SHOP NOW</button>
          </Link>
          <img className="analysis" src={analysis} alt="" />
        </div>
        <div className="group-img-container">
          <img className="group-img" src={groupImg} alt="" />
        </div>
      </div>
      <img className="brands-img" src={brands} alt="" />
      {/* New Arrivals Section */}
      <div className="section-2">
        <h1 className="bold">NEW ARRIVALS</h1>
        <div className="carousel-container">
          <button className="carousel-button left" onClick={() => scrollLeft(newArrivalsRef)}>
            &lt;
          </button>
          <div className="carousel" ref={newArrivalsRef}>
            {products.slice(0, 4).map((product) => (
              <Item
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image_path}
                cart={cart}
                addToCart={addToCart}
              />
            ))}
          </div>
          <button className="carousel-button right" onClick={() => scrollRight(newArrivalsRef)}>
            &gt;
          </button>
        </div>
      </div>
      {/* Top Selling Section */}
      <div className="section-3">
        <h1 className="bold">
          TOP SELLING
        </h1>
        <div className="carousel-container">
          <button className="carousel-button left" onClick={() => scrollLeft(topSellingRef)}>
            &lt;
          </button>
          <div className="carousel" ref={topSellingRef}>
            {products.slice(0, 4).map((product) => (
              <Item
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image_path}
                cart={cart}
                addToCart={addToCart}
              />
            ))}
          </div>
          <button className="carousel-button right" onClick={() => scrollRight(topSellingRef)}>
          &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeBody;