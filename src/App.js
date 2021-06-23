import React, { useState } from "react";
import PorductList from "./components/ProsectList";
import { Store, storContext } from "./context";

function App() {
  return (
    <storContext.Provider value={Store}>
      <h1>welcome to NiNa shop</h1>
      <PorductList />
    </storContext.Provider>
  );
}

export default App;
