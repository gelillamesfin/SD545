import React from "react";
import { useState } from "react";


function Random() {
  const [num, setNum] = useState(1);

  const assignNum = () => {
    setNum(Math.floor(Math.random() * 101));
  };
  return (
    <div className="App">
      {num}
      <button onClick={assignNum}>Random Number</button>
    </div>
  );
}

export default Random;
