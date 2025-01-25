import HomeBody from './HomeBody'
const Home  = ({cart, addToCart}) => {
    console.log(cart)
    return (
        <>
            <HomeBody cart={cart} addToCart ={addToCart}/>
        </>
     );
}
 
export default Home;