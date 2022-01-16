import { Container, Row, Col } from 'react-bootstrap';
import './App.css'
function Footer() {
    return (
        <>
            <Container fluid className='footer-component'>
                <Row>
                    <Col>
                        <div className="footer-nav">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-nav">
                            <ul>
                                <li>New Arrivals</li>
                                <li>Discounts</li>
                                <li>Brands</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Footer;