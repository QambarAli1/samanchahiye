import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className='welcome'>Welcome to SamanChahiye.pk</h2>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
