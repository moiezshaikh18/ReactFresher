import { useEffect, useContext } from "react";
import { MdDelete, MdThumbUp, MdThumbDown, MdVisibility } from "react-icons/md";
import { PostListContext } from "../../store/post-list-store";
import Card from "react-bootstrap/Card";

function Post({ id, title, content, tags }) {
  const { handleOnDelete, likePost, dislikePost, incrementViews, posts } =
    useContext(PostListContext);

  const post = posts.find((p) => p.id === id);

  // count view when component shows
  useEffect(() => {
    incrementViews(id);
  }, [id]);

  return (
    <Card className="min-w-full">
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: title }} />
        <Card.Text dangerouslySetInnerHTML={{ __html: content }} />

        <div className="mt-2 mb-2">
          {tags?.map((tag, i) => (
            <span key={i} className="badge bg-secondary me-1">
              #{tag.trim()}
            </span>
          ))}
        </div>

        {/* actions */}
        <div className="d-flex gap-3 align-items-center">
          <span onClick={() => likePost(id)} style={{ cursor: "pointer" }}>
            <MdThumbUp /> {post.reactions.likes}
          </span>

          <span onClick={() => dislikePost(id)} style={{ cursor: "pointer" }}>
            <MdThumbDown /> {post.reactions.dislikes}
          </span>

          <span>
            <MdVisibility /> {post.views}
          </span>

          <MdDelete
            style={{ cursor: "pointer" }}
            onClick={() => handleOnDelete(id)}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;
