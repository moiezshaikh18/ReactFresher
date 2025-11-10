import React from "react";
import { useSelector } from "react-redux";

export const DisplayCounter = () => {
  const { privacy } = useSelector((state) => state.counter);
  const { count } = useSelector((state) => state.counter);

  return <>{!privacy ? <p className="lead mb-4">{count}</p> : <p>!!!!!</p>}</>;
};
