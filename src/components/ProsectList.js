import React, { useState, useContext } from "react";
import { storContext } from "../context";
import ProductItem from "./ProductItem";

const PorductList = () => {
  const store = useContext(storContext);
  const [bill, setBill] = useState(0);
  const items = store.data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={store.addToCart} />
  ));
  return (
    <React.Fragment>
      <div>
        <button onClick={() => setBill(store.bill())}>Totall Bill</button>
        <h6>{bill} euro </h6>
      </div>
      <ul className="item.list">{items} </ul>
    </React.Fragment>
  );
};
export default PorductList;
