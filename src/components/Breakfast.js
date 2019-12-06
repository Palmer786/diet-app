import React, { useContext } from "react";
import { DietContext } from "./DietContext";
import "../App.css";

const Breakfast = () => {
  const [items, setItems] = useContext(DietContext);
  return (
    <div className="main">
        <h1>BREAKFAST</h1>
      <div className="search">

        <input type="text" className="search-bar" />
        <button className="search-button">Search</button>
      </div>
      <div className="myList">
        {items[0].food.map(item => (
          <div className="product" key={item.id}>
            <div className="product-name">
              <h3>{item.name}</h3>
            </div>
            <div className="product-details">
              <p>Calories: {item.calories}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
