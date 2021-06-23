import React from "react";
import Data from "../data.json";
const Store = {
  data: Data,
  cart: [],
  bill: function () {
    return this.cart.reduce((acc, cur) => acc + cur.price, 0);
  },
  addToCart: (item) => Store.cart.push(item),
};
const storContext = React.createContext(Store);
export { Store, storContext };
