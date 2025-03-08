import { useParams} from "react-router-dom";
import { useRef , useState, useEffect} from "react";
import Item from "./item";
import './index.css'

const Product = ({products, cart, addToCart}) => {
    let { id } = useParams();
    let idNumber = Number(id);
    let product = products.find((product) => product.id === idNumber);
    console.log(product)
    const [qty, setQty] = useState(1);
    const handleAddToCart = () => {
        addToCart(product.id, product.name, product.price, product.image, qty);
    };
    function handleReduceQty() {
        setQty(qty - 1);
        if(qty === 1){
            setQty(1)
        }
    }
    const handleSetQty = () => {
        setQty(qty + 1);
    }
    useEffect(() => {
        console.log("Updated Cart:", cart);
      }, [cart]); // This will log whenever `cart` changes
    
    const mightLikeRef = useRef(null);
    return ( 
        <div className="product">
            {!products && <div>Loading...</div>}
            <div className="product-sec-1">
                <div style={{display: "flex", flexDirection: "row-reverse", justifyContent:"flex-end", gap: "15px"}}>
                    <div>
                        <div className="product-image">
                            <img src={`https://php-for-ecom-site.onrender.com/public/${product.image}`} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className = "product-front small-image">

                        </div>
                        <div className = "product-back small-image">

                        </div>
                        <div className = "product-model small-image">

                        </div>  
                    </div>
                </div>
                <div>
                    <h1>{product.name}</h1>
                    <h1>${product.price}</h1>
                    <h3>{product.description}</h3>
                    <hr />
                    <h3>Select Colors</h3>
                    <hr />
                    <h3>Choose Size</h3>
                    <input type="button" value="Small" />
                    <input type="button" value="Medium" />
                    <input type="button" value="Large" />
                    <input type="button" value="Extra large" />
                    <hr />
                    <div>
                        <div className='itemNumber'>
                                <button onClick={handleReduceQty}>-</button>
                                <p>{qty}</p>
                                <button onClick={handleSetQty}>+</button>
                        </div>
                        <div>
                            <input type="button" value="Add to cart" onClick={handleAddToCart}/>
                        </div>   
                    </div>
                   
                </div>
            </div>
            <div className="product-sec-3">
                <h2 className="bold">YOU MIGHT ALSO LIKE</h2>
                <div className="carousel-container">
                    <button className="carousel-button left" onClick={() => scrollLeft(mightLikeRef)}>
                        &lt;
                    </button>
                    <div className="carousel" ref={mightLikeRef}>
                        {products.slice(0, 4).map((product) => (
                        <Item
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            cart={cart}
                            addToCart={addToCart}
                        />))}
                    </div>
                    <button className="carousel-button right" onClick={() => scrollRight(mightLikeRef)}>
                        &gt;
                    </button>
                </div>
          </div>
            
        </div>
     );
}
 
export default Product;