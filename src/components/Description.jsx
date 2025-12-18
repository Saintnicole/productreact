import product from '../product.js'

// Component responsible for rendering only the product description text
function Description() {
  return <p>{product.description}</p>;
}

export default Description;