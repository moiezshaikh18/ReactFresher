import FetchItem from "../components/FetchItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { fetchStatusSlice } from "../store/fetchStatusSlice";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
