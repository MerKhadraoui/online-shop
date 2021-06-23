import Data from "./data.json";
import React, { useState } from "react";
import PorductList from "./components/ProsectList";
function App() {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState(Data);
  const [filterData, setFilterData] = useState([]);
  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userInput.length;
    let newArr = data.filter((item) => {
      const slicedProdectName = item.prodectName.slice(0, userTextLength);
      return slicedProdectName === userText;
    });
    setFilterData(newArr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    lookUp();
  };
  return (
    <React.Fragment>
      <h2>Welcom to NiNa shop</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="search" />
      </form>
      <PorductList data={userInput ? filterData : data} />
    </React.Fragment>
  );
}

export default App;
