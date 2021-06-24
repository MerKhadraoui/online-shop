import React, { useState, useContext } from "react";
import { storContext } from "../context";
const Filter = ({ info, filterCard }) => {
  const { id, productName, icon, price, inventory } = info;
  return (
    <li key={id}>
      {productName} <i>{icon}</i>
      <h5>{price}€</h5>
      <h6>{inventory} items in stock</h6>
      <button
        disabled={inventory === 0}
        onClick={() => {
          filterCard(info);
        }}
      >
        {inventory > 0 ? "Add to cart" : "Sold out"}
      </button>
    </li>
  );
};
export default Filter;
