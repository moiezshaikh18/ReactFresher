import { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TodoItemsContext } from "../../store/todoItemStore";

const TodoItem = ({ todoName, todoDate, id }) => {
  const { handleDeleteTodo } = useContext(TodoItemsContext);

  return (
    <Container className="item-container">
      <Row className="custom-row">
        <Col xs={5}>{todoName}</Col>
        <Col>{todoDate}</Col>
        <Col>
          <Button
            variant="danger"
            className="custom-button"
            onClick={() => handleDeleteTodo(id)}
          >
            x
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoItem;
