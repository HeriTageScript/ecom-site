import shirt from  './assets/shirt-1.png'
import deleteCart from './assets/delete.png'
import './index.css'
import {useState} from 'react'
const CartItem = ({name, price, id, image, qty, cart, addToCart, reduceQty, deleteFromCart}) => {
    function handleAddToCart() {
        addToCart(id, name, price, image)
    }    

    function handleDeleteFromCart() {
        deleteFromCart(id)
    }    
    function handleReduceQty() {
        reduceQty(id)
    }
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
                    <img onClick={handleDeleteFromCart} src={deleteCart} alt="" />
                    <div className='itemNumber'>
                        <button onClick={handleReduceQty}>-</button>
                        <p>{qty}</p>
                        <button onClick={handleAddToCart}>+</button>
                    </div>
                </div>
            </div>
            
            <hr/>
        </div>
     );
}
 
export default CartItem;