import { Container, Row, Col, Button } from "react-bootstrap";

const AddTodo = () => {
  return (
    <Container className="item-container">
      <Row className="custom-row">
        <Col xs={5}>
          <input type="text" placeholder="Enter Todo Here" />
        </Col>
        <Col>
          <input type="date" />
        </Col>
        <Col>
          <Button variant="success" size="sm" className="custom-button">
            Success
          </Button>
        </Col>
      </Row>
      <Row className="custom-row">
        <Col xs={5}>Buy Milk</Col>
        <Col>4/10/2025</Col>
        <Col>
          <Button variant="danger" className="custom-button">
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTodo;
