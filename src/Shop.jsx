import Item from "./item";
import {useState, useEffect} from 'react'
import './index.css' 
const Shop = ({cart, addToCart}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('https://php-for-ecom-site.onrender.com/public/api/getProducts.php')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);
    return ( 
        <>
            <div className="shop">
                {products.map((product) => ( <Item key={product.id}  addToCart={addToCart} id={product.id} name={product.name} price={product.price} image={product.image_path} /> ))}
                {products.map((product) => ( <Item key={product.id}  addToCart={addToCart} id={product.id} name={product.name} price={product.price} image={product.image_path} /> ))}
                {products.map((product) => ( <Item key={product.id}  addToCart={addToCart} id={product.id} name={product.name} price={product.price} image={product.image_path} /> ))}
                {!products && <h1>No product found</h1>}
            </div>
        </>
     );
}
 
export default Shop;