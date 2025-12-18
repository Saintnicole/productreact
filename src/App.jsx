import './App.css'

// Importing the small reusable product detail components
import Productname from './components/Name'
import Description from './components/Description'
import Productimage from './components/Image'
import Price from './components/Price'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './assets/image.jpeg'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const firstName = "Nicolletta";
function App() {
  return (
    <>
      {/* Main area centers the card on the page using inline styles (your original layout) */}
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* Product card created using React‑Bootstrap */}
        <Card style={{ width: '20rem', backgroundColor: '#000435', borderRadius: '25px solid #000435' }}>
          <Productimage />
          <Card.Body>
            <Productname />
            <Description />
          </Card.Body>
          <ListGroup className="list-group-flush" style={{ display: 'flex', justifyContent: 'center' }}>
            <Price />
          </ListGroup>
          <Card.Body>
            {/* Link is styled to look like a button, not a default blue underlined link */}
            <Card.Link href="#" className="buy-link">Buy now</Card.Link>
          </Card.Body>
        </Card>

        {/* Simple greeting text below the card */}
        <h3 style={{ marginTop: '15px', color: 'aqua' }}>
          {firstName ? `Hello, ${firstName}!` : 'Hello, there!'}
        </h3>

        {/* Rounded square image box that appears after the greeting */}
        <div className="greeting-image-box">
          <img src={image} alt="Greeting" />
        </div>
      </main>
    </>
  )
}

export default App
