import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DietContext } from "./DietContext";

const DinnerSum = () => {
  const navLinks = {
    textDecoration: "none",
    color: "white"
  };
  const [items, setItems] = useContext(DietContext);
  let dinnerCal = 0;
  let dinnerCarbo = 0;
  let dinnerFat = 0;
  let dinnerPro = 0;
  return (
    <div className="diet-info">
      <div className="diet-details">
        {items[1].food.map(item => {
          dinnerCal += item.calories;
          dinnerPro += item.proteins;
          dinnerFat += item.fat;
          dinnerCarbo += item.carbohydrates;
        })}
        <h3>Calories: {dinnerCal}</h3>
        <h3>Proteins: {dinnerPro}</h3>
        <h3>Fat: {dinnerFat}</h3>
        <h3>Carbohydrates: {dinnerCarbo}</h3>
      </div>
      <button>
        <Link to="/dinner" style={navLinks}>
          My dinner
        </Link>
      </button>
    </div>
  );
};

export default DinnerSum;
