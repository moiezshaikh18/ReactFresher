import React from "react";
import { useSelector } from "react-redux";

export const DisplayCounter = () => {
  const privacy = useSelector((state) => state.privacy);

  const counter = useSelector((state) => state.counter);
  return (
    <>{!privacy ? <p className="lead mb-4">{counter}</p> : <p>!!!!!</p>}</>
  );
};
