import star from './assets/star-4.5.png';
import AddToCart from './assets/add-to-cart.svg';
import {Link} from 'react-router-dom';
const Item = ({ id, name, price, image, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(id, name, price, image);
  };

  return (
    <div style={{width:'fit-content'}}>
      <div className='item-bg'>
        <Link to={'/Product/'+id}><img src={`https://php-for-ecom-site.onrender.com/public/${image}`} alt={name} /></Link>
      </div>
      <div style={{ display: "flex", marginTop: '20px', flexDirection: 'column', gap: '10px' }}>
        <h2>{name}</h2>
        <div>
          <img src={star} alt="rating" />
        </div>
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
          <h4>${price}</h4>
          <button onClick={handleAddToCart} style={{ backgroundColor: 'transparent', border: 'none' }}>
            <img style={{ width: '40px' }} src={AddToCart} alt="Add to Cart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;