import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const items = useSelector((state) => state.items.items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
