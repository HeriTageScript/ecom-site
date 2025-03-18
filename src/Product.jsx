import { useParams} from "react-router-dom";
import { useRef , useState, useEffect} from "react";
import Item from "./item";
import './index.css'
import star from './assets/star-5.svg'
import Testimony from './testimony'

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
                        <img src={`https://php-for-ecom-site.onrender.com/public/${product.image}`} alt="" />

                        </div>
                        <div className = "product-back small-image">
                        <img src={`https://php-for-ecom-site.onrender.com/public/${product.image}`} alt="" />

                        </div>
                        <div style={{margin:'0'}} className = "product-model small-image">
                        <img src={`https://php-for-ecom-site.onrender.com/public/${product.image}`} alt="" />

                        </div>  
                    </div>
                </div>
                <div style={{width: "100%", display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', paddingRight:'35px'}}>
                    <div style={{width: "100%", display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'10px'}}>
                        <h1 style={{fontSize:'40px'}} className="bold">{product.name.toUpperCase()}</h1>
                        <img src={star} alt="" />
                        <h1 >${product.price}</h1>
                        <h3  style={{color:'rgb(0,0,0,0.6)', fontWeight:'400', fontSize:'16px'}}>{product.description}</h3>
                    </div>
                    <hr />
                    <div>
                        <h3 style={{color:'rgb(0,0,0,0.6)', fontWeight:'400', fontSize:'16px'}}>Select Colors</h3>
                        <div className="colorButtonDiv">
                            <input className="colorButton" type="button"  />
                            <input className="colorButton" type="button"  />
                            <input className="colorButton" type="button"  />
                            <input className="colorButton" type="button"  />
                        </div>                        
                    </div>
                    
                    <hr />
                    <div>
                        <h3 style={{color:'rgb(0,0,0,0.6)', fontWeight:'400', fontSize:'16px'}}>Choose Size</h3>
                        <div className="sizeButtonDiv">
                            <input className="sizeButton" type="button" value="Small" />
                            <input className="sizeButton" type="button" value="Medium" />
                            <input className="sizeButton" type="button" value="Large" />
                            <input className="sizeButton" type="button" value="X-Large" />
                        </div>   
                    </div>
                   

                    <hr />
                    <div style={{display: "flex", flexDirection: "row", width:"100%", alignItems: "center", gap: "10px"}}>
                        <div style={{width:'26%'}} className='itemNumber'>
                                <button style={{justifySelf:'flex-start'}} onClick={handleReduceQty}>-</button>
                                <p>{qty}</p>
                                <button style={{alignSelf:'flex-end'}} onClick={handleSetQty}>+</button>
                        </div>
                        <div style={{width:'65%'}}  >
                            <input className="addToCartBtn" type="button" value="Add to cart" onClick={handleAddToCart}/>
                        </div>   
                    </div>
                   
                </div>
            </div>
            <div className="product-sec-3">
                <h2 style={{textAlign:'center', fontSize:'2.6rem '}} className="bold">YOU MIGHT ALSO LIKE</h2>
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