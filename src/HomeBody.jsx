import './index.css';
import Testimony from './testimony';
import brands from './assets/brands.png';
import groupImg from './assets/group.png';
import analysis from './assets/analysis.png';
import Item from './item';
import {useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import casual from './assets/casual.png';
import gym from './assets/gym.png';
import formal from './assets/formal.png';
import party from './assets/party.png';
import Footer from './footer';


const HomeBody = () => {
  const newArrivalsRef = useRef(null);
  const topSellingRef = useRef(null);

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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost/shop/api/getProducts.php')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

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
          <Link to = '/shop'><button style={{whiteSpace:'nowrap'}}>SHOP NOW</button></Link>
          <img className="analysis" src={analysis} alt="" />
        </div>
        <div style={{ display: 'flex', alignItems:'end'}}>
            <img className="group-img" src={groupImg} alt="" />
        </div>
      </div>
      <img style={{ width: '100%' }} src={brands} alt="" />
      {/* New Arrivals Section */}
      <div className="section-2">
        <h1 className="bold" >
          NEW ARRIVALS
        </h1>
        <div className="carousel-container">
          <button
            className="carousel-button left"
            onClick={() => scrollLeft(newArrivalsRef)}
          >
            ‹
          </button>
          <div ref={newArrivalsRef} className="carousel">
            {products.slice(0,4).map((product) => (
              <Item key={product.id} name={product.name} price={product.price} image={product.image_path} />
            ))}
          </div>
          <button
            className="carousel-button right"
            onClick={() => scrollRight(newArrivalsRef)}
          >
            ›
          </button>
        </div>
      </div>
      {/* Top Selling Section */}
      <div className="section-3">
        <h1 className="bold">
          TOP SELLING
        </h1>
        <div className="carousel-container">
          <button
            className="carousel-button left"
            onClick={() => scrollLeft(topSellingRef)}
          >
            ‹
          </button>
          <div ref={topSellingRef} className="carousel">
            {products.slice(0,4).map((product) => (
              <Item key={product.id} name={product.name} price={product.price} image={product.image_path} />
            ))}
          </div>
          <button
            className="carousel-button right"
            onClick={() => scrollRight(topSellingRef)}
          >
            ›
          </button>
        </div>
      </div>

      
    </>
  );
};

export default HomeBody;
