import React from "react"
import MenuItem from "./MenuItem"
import menuItems from "../data/data.json"
import "../App.css"
import "../index.scss"

const Onerecepie = () => {
  return (
    <div>
      <div className="receipe-content-area">
        <div className="container">
          <div className="header">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text">
            <h1 className="food">Menu</h1>
            {menuItems.map((menuItem) => (
              <MenuItem key={menuItem.recepie_Name} menuItem={menuItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onerecepie
