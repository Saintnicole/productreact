import product from '../product.js'
import "./styy.css"

// Simple image component for the product picture
function Productimage() {
    return <img src={product.productImage} alt="Hand Bag" />;
}

export default Productimage;