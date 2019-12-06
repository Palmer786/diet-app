import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DietContext } from "./DietContext";

const Diet = () => {
  const navLinks = {
    textDecoration: "none",
    color: "white"
  };
  const [items, setItems] = useContext(DietContext);
  let breakfastCal = 0;
  let dinnerCal = 0;
  let supperCal = 0;
  return (
    <div className="diet">
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
      <div className="diet-info">
        <div className="diet-details">
          {items[1].food.map(item => {
            dinnerCal += item.calories;
          })}
          <h3>Calories: {dinnerCal}</h3>
        </div>
        <button>
          <Link to="/dinner" style={navLinks}>
            My dinner
          </Link>
        </button>
      </div>
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
    </div>
  );
};
export default Diet;
