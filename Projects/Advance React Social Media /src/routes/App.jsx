import { useState } from "react";
import Container from "react-bootstrap/Container";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/sidebar/Sidebar";
import CreatePost from "../Components/createPost/CreatePost";
import PostList from "../Components/postList/PostiList";
import PostListContextProvider, {
  PostListContext,
} from "../store/post-list-store";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListContextProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <div className="d-flex flex-grow-1">
          <Sidebar />

          <Container className="my-3">
            {/* <HomeOrCreate /> */}
            <Outlet />
          </Container>
        </div>

        <Footer />
      </div>
    </PostListContextProvider>
  );
}

// function HomeOrCreate() {
//   const { selectedTab } = useContext(PostListContext);

//   return selectedTab === "Home" ? (
//     <div className="mt-3">
//       <PostList />
//     </div>
//   ) : (
//     <CreatePost />
//   );
// }

export default App;
