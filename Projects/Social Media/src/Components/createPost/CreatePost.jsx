import React from "react";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const CreatePost = ({ addPost }) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      ...post,
    };

    addPost(newPost);

    setPost({
      title: "",
      content: "",
    });
  };

  const handleOnCancel = () => {
    setPost({
      title: "",
      content: "",
    });
  };

  return (
    <div className="p-4  flex-grow-1">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-4 text-center fw-bold fs-4">
            Create a New Post
          </Card.Title>

          <Form>
            {/* Title */}
            <Form.Group className="mb-3" controlId="postTitle">
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your post title"
                required
                value={post.title}
                onChange={handleOnChange}
                name="title"
              />
            </Form.Group>

            {/* Content */}
            <Form.Group className="mb-3" controlId="postContent">
              <Form.Label>Post Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your post content here..."
                required
                value={post.content}
                onChange={handleOnChange}
                name="content"
              />
            </Form.Group>

            {/* Buttons */}
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleOnCancel}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit" onClick={handleAddPost}>
                Publish
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreatePost;
