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
  let breakfastCarbo = 0;
  let breakfastFat = 0;
  let breakfastPro = 0;
  return (
    <div className="diet-info">
      <div className="diet-details">
        {items[0].food.map(item => {
          breakfastCal += item.calories;
          breakfastPro += item.proteins;
          breakfastFat += item.fat;
          breakfastCarbo += item.carbohydrates;
        })}
        <h3>Calories: {breakfastCal}</h3>
        <h3>Proteins: {breakfastPro}</h3>
        <h3>Fat: {breakfastFat}</h3>
        <h3>Carbohydrates: {breakfastCarbo}</h3>
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
