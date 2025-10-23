import { Container, Row, Col, Button } from "react-bootstrap";

const TodoItem = ({ todoName, todoDate }) => {
  return (
    <Container className="item-container">
      <Row className="custom-row">
        <Col xs={5}>{todoName}</Col>
        <Col>{todoDate}</Col>
        <Col>
          <Button variant="danger" className="custom-button">
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoItem;
