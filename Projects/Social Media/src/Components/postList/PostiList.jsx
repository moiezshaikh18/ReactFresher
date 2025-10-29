import Post from "../post/Post";
const PostList = ({ posts, searchQuery }) => {
  return (
    <div className="d-flex flex-column gap-3 p-3">
      {posts
        .filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((post) => (
          <Post key={post.id} title={post.title} content={post.content} />
        ))}
    </div>
  );
};

export default PostList;
