import { Container, Row, Col, Button } from "react-bootstrap";

const AddTodo = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default AddTodo;
