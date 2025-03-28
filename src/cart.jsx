import Header from "./Header";
import Footer from "./footer";
import CartItem from './CartItem'
import { useState } from "react";
import './index.css'
const Cart = ({cart, addToCart, reduceQty, deleteFromCart}) => {
    // const[subTotal, SetsubTotal] = useState(0)
    // const[deliveryFee, setDeliveryFee] = useState(subTotal*0.02)
    let rawTotal = 0
    for(let i = 0 ; i < cart.length; i++){
        rawTotal += (cart[i].price * cart[i].qty) 
    }
    let subTotal = rawTotal
    let deliveryFee = subTotal*0.15
    let total = subTotal + deliveryFee 
    console.log(cart)

    return ( 
        <>
            {/* <h1 className="bold" style={{marginLeft:'80px'}} > YOUR CART</h1> */}
            <div className="cart-container">
                <div className="cart">
                    {!cart.length && <h1 style={{textAlign:'center'}}>No item in cart yet</h1>}
                    {cart.map((item) => (<CartItem key={item.id} name={item.name} price={item.price} id={item.id} image={item.image} qty={item.qty} cart={cart} deleteFromCart={deleteFromCart} reduceQty={reduceQty} addToCart={addToCart} />))}
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-detail">
                        <p>Subtotal</p>
                        <p>{subTotal}</p>
                    </div>
                    <div className="summary-detail">
                        <p>Delivery fee</p>
                        <p>{deliveryFee}</p>
                    </div>
                    <hr/>
                    <div className="summary-detail">
                        <p>Total</p>
                        <p>{total}</p>
                    </div>
                    <input type="button" value="Go to checkout " />
                </div>
            </div>
        </>
     );
}
 
export default Cart;