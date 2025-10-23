import "./App.css";
import Button from "./Components/Button";
import Hello from "./Components/Hello";
import Random from "./Components/Random";

function App() {
  return (
    <>
      <h1>React Hello</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Hello />
      </div>
      <Button />
      <Random />
    </>
  );
}

export default App;
