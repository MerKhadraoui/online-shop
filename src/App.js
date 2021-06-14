import Data from "./data.json";
import React, { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState("");

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <h2>Welcom to NiNa shop</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="search" />
      </form>
    </React.Fragment>
  );
}

export default App;
