import { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TodoItemsContext } from "../store/todoItemStore";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDate: "",
  });
  const { handleAddTodo } = useContext(TodoItemsContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!todo.todoName || !todo.todoDate) return;

    const newTodo = {
      id: Date.now(),
      ...todo,
    };

    handleAddTodo(newTodo);

    setTodo({
      todoName: "",
      todoDate: "",
    });
  };

  return (
    <Container>
      <Row className="custom-row">
        <Col xs={5}>
          <input
            type="text"
            name="todoName"
            value={todo.todoName}
            placeholder="Enter Todo Here"
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <input
            type="date"
            name="todoDate"
            value={todo.todoDate}
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Button
            variant="success"
            size="sm"
            className="custom-button"
            onClick={handleAdd}
          >
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTodo;
