const EmptyState = ({ message = "No posts found." }) => {
  return <div className="text-center mt-5 text-white fs-5">{message}</div>;
};

export default EmptyState;
