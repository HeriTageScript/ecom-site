import starFive from './assets/star-5.png';
import verified from './assets/verified.png';
const Testimony = () => {
    return (
        <div className="testimonial">
            <img style={{height:"35px"}} src={starFive} alt="" />
            <div style={{display:"flex", gap:"5px", alignItems:"center"}}>
                <h3>Sarah.M</h3>
                <img style={{height:"30px", width: "30px"}} src={verified} alt="" />
            </div>
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
        </div>
    );
};

export default Testimony;