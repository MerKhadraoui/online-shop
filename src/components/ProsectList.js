import React, { useState } from "react";
import ProductItem from "./ProductItem";
const PorductList = ({ data }) => {
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const addToCart = (item) => setCart((prevuStat) => [...prevuStat, item]);

  const items = data.map((item, i) => (
    <ProductItem key={i} info={item} addTocart={addToCart} />
  ));
  const bill = () => setTotalBill(cart.reduce((acc, cur) => acc + cur, 0));
  return (
    <React.Fragment>
      <div>
        <button onClick={bill}>Totall Bill</button>
        <h6>{totalBill} euro </h6>
      </div>
      <ul>{items} </ul>
    </React.Fragment>
  );
};
export default PorductList;
