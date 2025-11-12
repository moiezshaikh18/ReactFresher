import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag);

  // Check if this item is already in the bag
  const isInBag = bag.some((i) => i.id === item.id);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item)); // send full item
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt={item.item_name} />

      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>

      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>

      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">{item.discount_percentage}% OFF</span>
      </div>

      {isInBag ? (
        <button className="btn-remove-bag" onClick={handleRemoveFromBag}>
          Remove from Bag
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
