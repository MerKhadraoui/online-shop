import React from "react";

const ProductItem = ({ info, addToCart }) => {
  const { id, name, category, description, price, author, type, img } = info;
  return (
    <li key={id}>
      <img src={img} />
      <h1>{name}</h1> <p>{description}</p>
      <h5>{price}€</h5>
      <h6>{author}</h6> <h6>{type}</h6>
      <h3>
        type: {type} Category: {category}
      </h3>
      <button
        onClick={() => {
          console.log(info);
          addToCart(info);
        }}
      >
        Add to cart
      </button>
    </li>
  );
};
export default ProductItem;
