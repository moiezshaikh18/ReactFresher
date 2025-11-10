import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const [addValue, setAddValue] = useState("");
  const [subValue, setSubValue] = useState("");

  const handleIncrement = () => {
    dispatch({ type: "INC", payload: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: "DEC", payload: 1 });
  };

  const handleAdd = () => {
    const value = Number(addValue);
    if (!isNaN(value) && value !== 0) {
      dispatch({ type: "ADD", payload: value });
      setAddValue("");
    }
  };

  const handleSubtract = () => {
    const value = Number(subValue);
    if (!isNaN(value) && value !== 0) {
      dispatch({ type: "SUB", payload: value });
      setSubValue("");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center gap-4">
      {/* +1 / -1 Buttons */}
      <div className="d-flex gap-3">
        <Button
          variant="primary"
          className="btn-lg px-4"
          onClick={handleIncrement}
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
      </div>

      {/* Custom Add/Subtract Section */}
      <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-3">
        <Form.Control
          type="number"
          placeholder="Enter number to add"
          value={addValue}
          onChange={(e) => setAddValue(e.target.value)}
          className="w-auto"
        />
        <Button variant="info" className="btn-lg px-4" onClick={handleAdd}>
          ADD
        </Button>

        <Form.Control
          type="number"
          placeholder="Enter number to subtract"
          value={subValue}
          onChange={(e) => setSubValue(e.target.value)}
          className="w-auto"
        />
        <Button
          variant="danger"
          className="btn-lg px-4"
          onClick={handleSubtract}
        >
          SUBTRACT
        </Button>
      </div>
    </div>
  );
};

export default Controls;
