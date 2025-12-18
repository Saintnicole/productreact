import product from '../product.js'

function Productname() {
  // Extra class used to decorate the product title
  return <h2 className="product-name">{product.name}</h2>;
}
export default Productname;