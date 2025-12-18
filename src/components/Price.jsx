import product from '../product.js'

// Displays only the product price inside a styled container
function Price() {
  return (
    <div className="price-div">
      <h2>{product.price}</h2>
    </div>
  );
}

export default Price;