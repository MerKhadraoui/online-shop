import React from "react";

const Filter = ({ info, filterCard }) => {
  const { id, name, category, description, price, author, type, img } = info;
  return (
    <li className="filter-list" key={id}>
      {/* <img src={img} />
      <h1>{name}</h1>
      <h5>{price}€</h5>
      <h6>{author}</h6>
      <h3>
        type: {type} / Category: {category}
      </h3>
      <button
        onClick={() => {
          filterCard(info);
        }}
      >
        add to card
      </button> */}
    </li>
  );
};
export default Filter;
