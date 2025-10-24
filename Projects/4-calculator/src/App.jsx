import { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import ButtonPanel from "./Components/ButtonPanel";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div id="calculator-container">
      <Display value={input} />
      <ButtonPanel input={input} onClick={handleClick} />
    </div>
  );
}

export default App;
