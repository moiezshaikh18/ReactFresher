import { useReducer, createContext, useState, useEffect } from "react";

export const PostListContext = createContext({
  selectedTab: "",
  setSelectedTab: () => {},
  posts: [],
  searchQuery: "",
  addPost: () => {},
  handleOnSearch: () => {},
  handleOnDelete: () => {},
  likePost: () => {},
  dislikePost: () => {},
  incrementViews: () => {},
  getPostFromServer: () => {},
});

const initialState = {
  posts: [],
  searchQuery: "",
  isLoading: false,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "setPosts":
      return { ...state, posts: action.payload.posts };

    case "addPost":
      return {
        ...state,
        posts: [action.payload.post, ...state.posts],
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

    case "likePost":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? {
                ...post,
                reactions: {
                  ...post.reactions,
                  likes: post.reactions.likes + 1,
                },
              }
            : post
        ),
      };

    case "dislikePost":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? {
                ...post,
                reactions: {
                  ...post.reactions,
                  dislikes: post.reactions.dislikes + 1,
                },
              }
            : post
        ),
      };

    case "incrementViews":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? { ...post, views: post.views + 1 }
            : post
        ),
      };

    case "setLoading":
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

const PostListContextProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [state, dispatch] = useReducer(postReducer, initialState);

  const getPostFromServer = async () => {
    try {
      dispatch({ type: "setLoading", payload: true });
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();

      const formatted = data.posts.map((p) => ({
        id: p.id,
        title: p.title,
        content: p.body,
        tags: p.tags,
        reactions: p.reactions || { likes: 0, dislikes: 0 },
        views: p.views || 0,
      }));
      dispatch({ type: "setPosts", payload: { posts: formatted } });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "setLoading", payload: false });
  };

  const addPost = async (post) => {
    try {
      dispatch({ type: "setLoading", payload: true });

      const res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: post.title,
          body: post.content,
          tags: post.tags,
          userId: 1,
        }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      const formattedPost = {
        id: data.id,
        title: data.title,
        content: data.body,
        tags: data.tags,
        reactions: { likes: 0, dislikes: 0 },
        views: 0,
      };

      dispatch({ type: "addPost", payload: { post: formattedPost } });
    } catch (error) {
      console.log("POST Error:", error);
    }

    dispatch({ type: "setLoading", payload: false });
  };

  const handleOnSearch = (query) => {
    dispatch({ type: "handleOnSearch", payload: { query } });
  };

  const handleOnDelete = (id) => {
    dispatch({ type: "handleOnDelete", payload: { id } });
  };

  const likePost = (id) => {
    dispatch({ type: "likePost", payload: { id } });
  };

  const dislikePost = (id) => {
    dispatch({ type: "dislikePost", payload: { id } });
  };

  const incrementViews = (id) => {
    dispatch({ type: "incrementViews", payload: { id } });
  };

  return (
    <PostListContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        posts: state.posts,
        searchQuery: state.searchQuery,
        isLoading: state.isLoading,
        addPost,
        handleOnSearch,
        handleOnDelete,
        likePost,
        dislikePost,
        incrementViews,
        getPostFromServer,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;
