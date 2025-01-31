import email from './assets/email.png';
import twitter from './assets/twitter.svg';
import facebook from './assets/facebook.svg';
import insta from './assets/insta.svg';
import github from './assets/github.svg';
import visa from './assets/visa.png';
import{Link} from 'react-router-dom'
import mastercard from './assets/mastercard.png';
import paypal from './assets/paypal.png';
import applePay from './assets/apple-pay.png';
import googlePay from './assets/google-pay.png';
const Footer = () => {
    return ( 
        <div className='foot'>
            <div className="stud">
                <div className="email-subscription">
                    <h1 className='bold' style={{color:"#fff", fontSize:"40px", maxWidth:"700px"}}>STAY UP TO DATE ABOUT  OUR LATEST OFFERS</h1>
                    <form action="">
                        <div className='email-sub-div' >
                            <img src={email} alt="" />
                            <input className='email-input' type="email" placeholder="Enter your email address" />
                        </div>
                        <input className='btn' type="button" value="Subscribe to Newletter" />
                    </form>
                </div>
            </div>
            <div className='inside-foot' >
                <div>
                    <h1 className='bold footer-logo'>SHOP.CO</h1>
                    <p className='footer-logo-text'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div style={{display:"flex", gap:"10px", marginTop:"20px"}}>
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={insta} alt="" />
                        <img src={github} alt="" />
                    </div>


                </div>
                <div className='foot-details-div' >
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <h2>COMPANY</h2>
                        <a href="">About</a>
                        <a href="">Features </a>
                        <a href="">Works</a>
                        <a href="">Career</a>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <h2>HELP</h2>
                        <a href="">Customer Support</a>
                        <a href="">Delivery Details </a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy Policy</a>
                    </div>                    
                </div>
                <div className='foot-details-div' >
                    <div style={{display:"flex", flexDirection:"column"}}>  
                        <h2>FAQ</h2>
                        <a href="">Account</a>
                        <a href="">Manage deliveries </a>
                        <a href="">Orders</a>
                        <a href="">Payments</a>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <h2>RESOURCES</h2>
                        <Link to="/Cart">Free eBooks</Link>
                        <a href="">Development tutorial </a>
                        <a href="">How to - Blog</a>
                        <a href="">Youtube Playlist</a>
                    </div>
                </div>
                
            </div>
            <hr style={{marginTop:'15px'}}/>
            <div className='last-div'>
                <p>Shop.co © 2000-2023, All Rights Reserved</p>
                <div style={{marginTop:"10px"}} >
                    <img src={visa} alt="" />
                    <img src={mastercard} alt="" />
                    <img src={paypal} alt="" />
                    <img src={applePay} alt="" />
                    <img src={googlePay} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;