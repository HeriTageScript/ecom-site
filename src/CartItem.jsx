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
                <div display='flex' style={{display:'flex', flexDirection:'column'}}>
                    <div  style={{display:'flex', alignItems:'start', justifyContent:'space-between'}}>
                        <div>
                            <h3>{name}</h3>
                            <p>Size: Large</p>
                            <p>Color: White</p>
                        </div>
                        <img style={{}} onClick={handleDeleteFromCart} src={deleteCart} alt="" />
                    </div>
                    <div className='itemNumberDiv'>
                        {/* <div> */}
                            <h2>${price}</h2>
                            <div className='itemNumber'>
                                <button onClick={handleReduceQty}>-</button>
                                <p>{qty}</p>
                                <button onClick={handleAddToCart}>+</button>
                            {/* </div> */}
                        </div>

                    </div>
                </div>
               
            </div>
            
            <hr/>
        </div>
     );
}
 
export default CartItem;