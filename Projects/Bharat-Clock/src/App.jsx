import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppName } from "./Components/AppName";
import { LiveTime } from "./Components/LiveTime";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppName />
      <LiveTime />
    </>
  );
}

export default App;
