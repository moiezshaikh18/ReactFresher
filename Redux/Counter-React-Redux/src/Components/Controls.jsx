import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch({ type: "INC", payload: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: "DEC", payload: 1 });
  };

  return (
    <>
      <Button
        variant="primary"
        className="btn-lg px-4 gap-3"
        onClick={handleIncreament}
      >
        +1
      </Button>
      <Button
        variant="success"
        className="btn-lg px-4"
        onClick={handleDecrement}
      >
        -1
      </Button>
    </>
  );
};

export default Controls;
