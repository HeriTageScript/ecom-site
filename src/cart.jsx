import Header from "./Header";
import Footer from "./footer";
import CartItem from './CartItem'
import './index.css'
const Cart = () => {
    return ( 
        <>
            <h1 className="bold">YOUR CART</h1>
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div>

            </div>
        </>
     );
}
 
export default Cart;