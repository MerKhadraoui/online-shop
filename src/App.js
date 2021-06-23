import React, { useState } from "react";
import PorductList from "./components/ProsectList";
import { Store, storContext } from "./context";

function App() {
  const [userInput, setUserInput] = useState("");
  // const [filteredData, setFilteredData] = useState([]);
  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Store.lookUp(userInput);
  };
  // console.log(filteredData);
  return (
    <storContext.Provider value={Store}>
      <h1>welcome to NiNa shop</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <PorductList data={Store.lookUp(userInput)} />
    </storContext.Provider>
  );
}

export default App;
