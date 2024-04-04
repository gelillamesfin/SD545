
import React, { ChangeEvent, useState } from "react";

function App() {
  const [inputTemp, setInputTemp] = useState("");


  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTemp(e.currentTarget.value);
  };
  const convertTemp = () => {
    setInputTemp(((parseFloat(inputTemp) * 9) / 5 + 32).toFixed(0));
  };
  return (
    <div className="App">
      <input type="number" value={inputTemp} onChange={changeHandler} />
      <button onClick={convertTemp}>Convert to Fahrenheit </button>
    </div>
  );
}

export default App;