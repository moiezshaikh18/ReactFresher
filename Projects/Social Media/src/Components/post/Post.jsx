import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../../store/post-list-store";
import { useContext } from "react";

function Post({ title, content, tags, id }) {
  const { handleOnDelete } = useContext(PostListContext);

  return (
    <Card className="min-w-full">
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: title }} />
        <Card.Text dangerouslySetInnerHTML={{ __html: content }} />
        <div className="mt-2">
          {tags?.map((tag, i) => (
            <span key={i} className="badge bg-secondary me-1">
              #{tag.trim()}
            </span>
          ))}
        </div>
        <MdDelete
          className="text-end justify-content-end"
          onClick={() => handleOnDelete(id)}
        />
      </Card.Body>
    </Card>
  );
}

export default Post;
