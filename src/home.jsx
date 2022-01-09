import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './ecom.png';
import img2 from './online_shopping.jpeg';
import './App.css'
import Benefits from './benefits';

function Home() {
  return (
    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <img src={img1} width="100%" />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col className='wel-txt'>
    //       <h2 className='welcome'>Welcome to SamanChahiye.pk</h2>
    //       <h3>Delievering qulality products all over Pakistan</h3>
    //       <p>Free Delivery scroos Karachi</p>
    //     </Col>
    //   </Row>
    // </Container>
    <div>
      <img src={img2} width="100%" className='banner-image' />
      <div className='wel-txt'>
        <h2 className='welcome'>Welcome to SamanChahiye.pk</h2>
        <h3>Delievering qulality products all over Pakistan</h3>
        <p>Free Delivery scroos Karachi</p>
      </div>
      <Benefits heading="Free Delivery" para="Across Karachi" />
    </div>

  );
}
export default Home;
