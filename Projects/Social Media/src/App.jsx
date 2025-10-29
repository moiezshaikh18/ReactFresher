import { useState } from "react";
import Container from "react-bootstrap/Container";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/sidebar/Sidebar";
import CreatePost from "./Components/createPost/CreatePost";
import PostList from "./Components/postList/PostiList";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addPost = (post) => {
    setPosts((prev) => [...prev, post]);
  };

  const handleOnSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onSearch={handleOnSearch} />

      <div className="d-flex flex-grow-1">
        {/* Sidebar on the left */}
        <Sidebar selectedTab={selectedTab} onTabSelect={setSelectedTab} />

        {/* Main content area */}
        <Container className="my-3">
          {selectedTab === "Home" ? (
            <>
              <div className="mt-3">
                <PostList posts={posts} searchQuery={searchQuery} />
              </div>
            </>
          ) : (
            <CreatePost addPost={addPost} />
          )}
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default App;
