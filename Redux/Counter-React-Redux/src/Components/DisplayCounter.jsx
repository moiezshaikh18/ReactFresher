import React from "react";
import { useSelector } from "react-redux";

export const DisplayCounter = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <p className="lead mb-4">{counter}</p>
    </>
  );
};
