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
  return (
      <div className="diet-info">
        <div className="diet-details">
          {items[2].food.map(item => {
            supperCal += item.calories;
          })}
          <h3>Calories: {supperCal}</h3>
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
