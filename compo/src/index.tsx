import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Counter from "./AppCounter";
import Random from "./AppRandom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <br></br>
    <Counter />
    <br></br>
    <Random />
  </React.StrictMode>
);
