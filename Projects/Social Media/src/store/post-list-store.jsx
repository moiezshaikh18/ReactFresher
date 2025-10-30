import { useReducer, createContext, useState } from "react";

export const PostListContext = createContext({
  selectedTab: "",
  setSelectedTab: () => {},
  posts: [],
  searchQuery: "",
  addPost: () => {},
  handleOnSearch: () => {},
  handleOnDelete: () => {},
});

const initialState = {
  posts: [],
  searchQuery: "",
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "addPost":
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };

    case "handleOnSearch":
      return {
        ...state,
        searchQuery: action.payload.query,
      };

    case "handleOnDelete":
      return {
        ...state,
        posts: [...state.posts.filter((item) => item.id !== action.payload.id)],
      };

    default:
      return state;
  }
};

const PostListContextProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [state, dispatch] = useReducer(postReducer, initialState);

  const addPost = (post) => {
    dispatch({ type: "addPost", payload: { post } });
  };

  const handleOnSearch = (query) => {
    dispatch({ type: "handleOnSearch", payload: { query } });
  };

  const handleOnDelete = (id) => {
    dispatch({ type: "handleOnDelete", payload: { id } });
  };

  return (
    <PostListContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        posts: state.posts,
        searchQuery: state.searchQuery,
        addPost,
        handleOnSearch,
        handleOnDelete,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;
