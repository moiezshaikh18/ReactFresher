import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Container({ children }) {
  return (
    <Card style={{ width: "70%" }}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default Container;
