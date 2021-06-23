import React from "react";
import Data from "../data.json";
const Store = {
  data: Data,
  print: (str) => console.log(str),
};
const storContext = React.createContext(Store);
export { Store, storContext };
