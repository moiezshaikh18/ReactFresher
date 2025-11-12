import React from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((state) => state.bag);

  // 🧮 Calculate totals dynamically
  const totalItem = bagItems.length;

  const totalMRP = bagItems.reduce((sum, item) => sum + item.original_price, 0);

  const totalDiscount = bagItems.reduce(
    (sum, item) => sum + (item.original_price - item.current_price),
    0
  );

  const convenienceFee = totalItem > 0 ? 99 : 0;
  const finalPayment = totalMRP - totalDiscount + convenienceFee;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItem} Item{totalItem !== 1 ? "s" : ""})
        </div>

        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{convenienceFee}</span>
        </div>

        <hr />

        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>

      {totalItem > 0 && (
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      )}
    </>
  );
};

export default BagSummary;
