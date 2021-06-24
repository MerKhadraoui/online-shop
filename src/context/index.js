import React from "react";
import Data from "../data.json";
const Store = {
  data: Data,
  cart: [],
  bill: function () {
    return this.cart.reduce((acc, cur) => acc + cur.price, 0);
  },
  addToCart: (item) => Store.cart.push(item),
  lookUp: (str) => {
    let userText = str.toLocaleLowerCase().trim();
    let newArrLength = userText.length;
    return Store.data.filter((item) => {
      const slicedProductName = item.productName.slice(0, newArrLength);
      return slicedProductName === userText;
    });
  },
  filterArr: [],
  filterCard: (elem) => Store.filterArr.push(elem),
};
const storContext = React.createContext(Store);
export { Store, storContext };
