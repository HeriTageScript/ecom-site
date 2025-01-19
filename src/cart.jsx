import Header from "./Header";
import Footer from "./footer";
import CartItem from './CartItem'
import './index.css'
const Cart = () => {
    let subTotal = 0
    let deliveryFee = 15
    let total = subTotal + deliveryFee
    return ( 
        <>
            <h1 className="bold" style={{marginLeft:'80px'}} > YOUR CART</h1>
            <div className="cart-container">
                <div className="cart">
                    <CartItem />
                    <CartItem />
                    <CartItem />
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