import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col } from 'react-bootstrap';
import img1 from './ecom.png'

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={img1} width="100%" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='welcome'>Welcome to SamanChahiye.pk</h2>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
