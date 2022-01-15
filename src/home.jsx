import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col , Carousel} from 'react-bootstrap';
import img1 from './ecom.png';
import img2 from './online_shopping.jpeg';
import laptop1 from './laptop1.jpg'
import laptop2 from './laptop2.jpg'
import laptop3 from './laptop3.jpg'
import laptop4 from './laptop4.jpg'

import './App.css'
import Benefits from './benefits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Product from './product';
import Footer from './footer'

function Home() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={laptop4}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={laptop1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <div>
        {/* <img src={img2} width="100%" className='banner-image' />
        <div className='wel-txt'>
          <h2 className='welcome'>Welcome to SamanChahiye.pk</h2>
          <h3>Delievering qulality products all over Pakistan</h3>
          <p>Free Delivery scroos Karachi</p>
        </div> */}
        <div>
          <h1 className='whyshopwithus'>Why Shop With Us</h1>
        </div>
        <div className="benefits-maindiv">
          <Benefits icon={<DeliveryDiningIcon />} heading="Free Delivery" para="Providing you free dilivery across Karachi" />
          <Benefits icon={<LocalShippingIcon />} heading="Free Shipping" para="Providing you free Shipping across Karachi" />
          <Benefits icon={<VerifiedIcon />} heading="Best Quality" para="Providing you best quality of products" />
        </div>
        <div>
          <h1 className='whyshopwithus'>NEW COLLECTIONS</h1>
        </div>
        <div className="products-maindiv">
          <Product img_src={laptop1} price="500" />
          <Product img_src={laptop2} price="500" />
          <Product img_src={laptop4} price="500" />
          <Product img_src={laptop3} price="500" />
          <Product img_src={laptop2} price="500" />
          <Product img_src={laptop1} price="500" />
          <Product img_src={laptop3} price="500" />
          <Product img_src={laptop4} price="500" />
        </div>
      </div>
      <Footer />

    </>
  );
}
export default Home;
