import { useContext } from "react";
import Post from "../post/Post";
import { PostListContext } from "../../store/post-list-store";

const highlightText = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text?.replace(regex, "<mark>$1</mark>");
};

const PostList = () => {
  const { posts, searchQuery } = useContext(PostListContext);

  return (
    <div className="d-flex flex-column gap-3 p-3">
      {posts
        .filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={highlightText(post.title, searchQuery)}
            content={highlightText(post.body, searchQuery)}
            tags={post.tags}
          />
        ))}
    </div>
  );
};

export default PostList;
