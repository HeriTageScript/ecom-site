import { useParams } from "react-router-dom";
import { useRef } from "react";
import Item from "./item";
import './index.css'

const Product = ({products, cart, addToCart}) => {
    let { id } = useParams();
    let idNumber = Number(id);
    let product = products.find((product) => product.id === idNumber);
  

  
    const mightLikeRef = useRef(null);
    return ( 
        
        <>
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
            
        </>
     );
}
 
export default Product;