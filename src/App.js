import React, { useState, useContext } from "react";
import PorductList from "./components/ProsectList";
import { Store, storContext } from "./context";
import Filter from "./components/Filter";
import "./sass/main.scss";
function App() {
  const store = useContext(storContext);
  const [userInput, setUserInput] = useState("");

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setFilteredData
    Store.lookUp(userInput);
  };
  console.log(Store.lookUp(userInput));
  const elems = Store.lookUp(userInput).map((elem, i) => (
    <Filter
      key={i}
      info={elem}
      filterCard={userInput == !"" ? store.filterCard : ""}
    />
  ));
  return (
    <storContext.Provider value={Store}>
      <h1>welcome to NiNa shop</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="search" />
      </form>
      <PorductList />
      <ul>{elems} </ul>
    </storContext.Provider>
  );
}

export default App;
