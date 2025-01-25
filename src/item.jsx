import star from './assets/star-4.5.png';
import { useState } from 'react';
import shirt from './assets/shirt-1.png';
import AddToCart  from './assets/add-to-cart.svg';
const Item = ({cart, addToCart, name, price, image, id}) => {
    function handleAddToCart(){
        addToCart(id)
    }

    return ( 
        <>
            <div> 
                <div className='item-bg'>
                    <img src={`https://php-for-ecom-site.onrender.com/public/${image}`} alt="" />
                </div>
                <div style={{display:"flex", marginTop:'20px', flexDirection:'column', gap:'10px'}}>
                    <h2>{name}</h2>
                    <div>
                        <img src={star} alt="" />
                    </div>
                    <div style={{display:"flex", justifyContent:'space-between', alignItems:'center'}}>
                        <h4>${price}</h4>
                        <button onClick={handleAddToCart} style={{backgroundColor:'transparent', border:'none', }}> 
                            <img style={{width:'40px'}} src={AddToCart} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
      
     );
}
 
export default Item;