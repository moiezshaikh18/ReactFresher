import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Button from "react-bootstrap/esm/Button";

const EmptyState = ({ message = "No posts found." }) => {
  const { getPostFromServer, isLoading } = useContext(PostListContext);

  return (
    <>
      <div className="text-center mt-5 text-white fs-5">{message}</div>
      <Button
        onClick={() => getPostFromServer()}
        variant="outline-light"
        className="me-2"
        size="sm"
      >
        {isLoading ? "Loading..." : "Get Posts From Server"}
      </Button>
    </>
  );
};

export default EmptyState;
