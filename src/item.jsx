import star from './assets/star-4.5.png';
import shirt from './assets/shirt-1.png';
const Item = ({name, price, image}) => {
    return ( 
        <>
            <div> 
                <div className='item-bg'>
                    <img src={`http://ecom-site.byethost6.com/${image}`} alt="" />
                </div>
                <div style={{display:"flex", marginTop:'20px', flexDirection:'column', gap:'10px'}}>
                    <h2>{name}</h2>
                    <div>
                        <img src={star} alt="" />
                    </div>
                    <h4>${price}</h4>
                </div>
            </div>
        </>
      
     );
}
 
export default Item;