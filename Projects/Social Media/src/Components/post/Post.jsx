import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Post({ title, content }) {
  return (
    <Card className="min-w-full">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" size="sm">
          View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
