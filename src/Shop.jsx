import Item from "./item";
import {useState, useEffect} from 'react'
import './index.css' 
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('http://localhost/shop/api/getProducts.php')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);
    return ( 
        <>
            <div className="shop">
            {products.map((product) => ( <Item key={product.id} name={product.name} price={product.price} image={product.image_path} /> ))}
            {products.map((product) => ( <Item key={product.id} name={product.name} price={product.price} image={product.image_path} /> ))}
            {products.map((product) => ( <Item key={product.id} name={product.name} price={product.price} image={product.image_path} /> ))}
                {!products && <h1>No product found</h1>}
            </div>
        </>
     );
}
 
export default Shop;