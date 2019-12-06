import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DietContext } from "./DietContext";

const BreakfastSum = () => {
  const navLinks = {
    textDecoration: "none",
    color: "white"
  };
  const [items, setItems] = useContext(DietContext);
  let breakfastCal = 0;
  return (
      <div className="diet-info">
        <div className="diet-details">
          {items[0].food.map(item => {
            breakfastCal += item.calories;
          })}
          <h3>Calories: {breakfastCal}</h3>
        </div>
        <button>
          <Link to="/breakfast" style={navLinks}>
            My breakfast
          </Link>
        </button>
      </div>
  );
};

export default BreakfastSum;
