import shirt from  './assets/shirt-1.png'
import deleteCart from './assets/delete.png'
import './index.css'
const CartItem = ({name, price, id, image, qty, addToCart}) => {
    return ( 
        <div className='cart-item-div' style={{width:'fit-content', display:'flex', flexDirection:'column',gap:'20px'}}>
            <div className ="cart-item">
                <div className='cart-shirt-div' style={{}}>
                    <img className='cart-shirt' src={`https://php-for-ecom-site.onrender.com/public/${image}`} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>Size: Large</p>
                    <p>Color: White</p>
                    <h2>${price}</h2>
                </div>
                <div className='itemNumberDiv'>
                    <img src={deleteCart} alt="" />
                    <div className='itemNumber'>
                        <button>-</button>
                        <p>{qty}</p>
                        <button>+</button>
                    </div>
                </div>
            </div>
            
            <hr/>
        </div>
     );
}
 
export default CartItem;