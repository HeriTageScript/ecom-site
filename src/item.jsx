import star from './assets/star-4.5.png';
import shirt from './assets/shirt-1.png';
const Item = () => {
    return ( 
        <>
            <div> 
                <div className='item-bg'>
                    <img src={shirt} alt="" />
                </div>
                <div style={{display:"flex", marginTop:'20px', flexDirection:'column', gap:'10px'}}>
                    <h2>T-shirt with Tape details</h2>
                    <div>
                        <img src={star} alt="" />
                    </div>
                    <h4>$120</h4>
                </div>
            </div>
        </>
      
     );
}
 
export default Item;