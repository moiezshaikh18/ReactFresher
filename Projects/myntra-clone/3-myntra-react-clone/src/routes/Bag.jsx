import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItems.length > 0 ? (
            bagItems.map((item) => <BagItem key={item.id} item={item} />)
          ) : (
            <h3 style={{ textAlign: "center", margin: "2rem" }}>
              🛍️ Your bag is empty
            </h3>
          )}
        </div>

        <div className="bag-summary">
          {bagItems.length > 0 && <BagSummary />}
        </div>
      </div>
    </main>
  );
};

export default Bag;
