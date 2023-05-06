import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
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
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
