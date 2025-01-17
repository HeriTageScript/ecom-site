import shirt from  './assets/shirt-1.png'
import deleteCart from './assets/delete.png'
import './index.css'
const CartItem = () => {
    return ( 
        <div className='cart-item-div' style={{width:'fit-content', display:'flex', flexDirection:'column',gap:'20px'}}>
            <div className ="cart-item">
                <div className='cart-shirt-div' style={{}}>
                    <img className='cart-shirt' src={shirt} alt="" />
                </div>
                <div>
                    <h3>Gradient Graphic T-shirt</h3>
                    <p>Size: Large</p>
                    <p>Color: White</p>
                    <h2>$143</h2>
                </div>
                <div className='itemNumberDiv'>
                    <img src={deleteCart} alt="" />
                    <div className='itemNumber'>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </div>
            </div>
            
            <hr/>
        </div>
     );
}
 
export default CartItem;