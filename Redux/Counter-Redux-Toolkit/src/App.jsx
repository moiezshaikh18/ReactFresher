import { useState } from "react";
import "./App.css";
import AppName from "./Components/AppName";
import { DisplayCounter } from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";

function App() {
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <AppName />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter />
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Controls />
          </div>
        </div>
      </Container>
    </center>
  );
}

export default App;
