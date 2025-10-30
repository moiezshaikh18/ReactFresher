import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { IoChatbubblesSharp } from "react-icons/io5";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

function Footer() {
  return (
    <footer className="py-3 my-4 border-top bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          {/* Left Section */}
          <Col md={6} className="d-flex align-items-center">
            <IoChatbubblesSharp size={24} className="me-2" />
            <span>© 2025 Company, Inc</span>
          </Col>

          {/* Right Section */}
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <Nav className="d-flex">
              <Nav.Item>
                <Nav.Link
                  href="#"
                  className="text-white p-0 ms-3"
                  aria-label="Facebook"
                >
                  <TiSocialFacebook size={30} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#"
                  className="text-white p-0 ms-3"
                  aria-label="Instagram"
                >
                  <TiSocialInstagram size={30} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
