import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DietContext } from "./DietContext";

const SupperSum = () => {
  const navLinks = {
    textDecoration: "none",
    color: "white"
  };
  const [items, setItems] = useContext(DietContext);
  let supperCal = 0;
  let supperCarbo = 0;
  let supperFat = 0;
  let supperPro = 0;
  return (
    <div className="diet-info">
      <div className="diet-details">
        {items[2].food.map(item => {
          supperCal += item.calories;
          supperPro += item.proteins;
          supperFat += item.fat;
          supperCarbo += item.carbohydrates;
        })}
        <h3>Calories: {supperCal}</h3>
        <h3>Proteins: {supperPro}</h3>
        <h3>Fat: {supperFat}</h3>
        <h3>Carbohydrates: {supperCarbo}</h3>
      </div>
      <button>
        <Link to="/supper" style={navLinks}>
          My supper
        </Link>
      </button>
    </div>
  );
};

export default SupperSum;
