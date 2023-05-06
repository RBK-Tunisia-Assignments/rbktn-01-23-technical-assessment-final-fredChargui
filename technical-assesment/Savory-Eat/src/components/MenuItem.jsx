import React from "react"
const MenuItem = ({ menuItem }) => {
  return (
    <div>
      <h2>{menuItem.name}</h2>
      <p>{menuItem.description}</p>
      <p>Price: {menuItem.price}</p>
    </div>
  );
};

export default MenuItem
