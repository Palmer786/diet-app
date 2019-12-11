import React, { useState, useEffect } from "react";
import DelMealKey from "./DelMealKey";
import { Link } from "react-router-dom";

const Meal = ({ title, setMealKeys }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(`${title}`)) || {
      key: title,
      food: [
        {
          id: 3,
          name: "mandarynka",
          calories: 50,
          proteins: 3,
          fats: 5,
          carbohydrates: 10
        },
        {
          id: 5,
          name: "banan",
          calories: 120,
          proteins: 3,
          fats: 2,
          carbohydrates: 30
        }
      ]
    }
  );
  useEffect(() => {
    localStorage.setItem(`${title}`, JSON.stringify(items));
  }, [items]);
  const navLinks = {
    textDecoration: "none",
    color: "white"
  };
  let totalCalories = 0;
  let totalCarbohydrates = 0;
  let totalFats = 0;
  let totalProteins = 0;

  return (
    <div className="diet-info">
      <button>
        <Link to={"/meals/" + `${title}`} style={navLinks}>
          My {title}
        </Link>
      </button>
      <div className="diet-details">
        {items.food.map(item => {
          totalCalories += item.calories;
          totalProteins += item.proteins;
          totalFats += item.fats;
          totalCarbohydrates += item.carbohydrates;
        })}
        <h3>Calories: {totalCalories}</h3>
        <h3>Proteins: {totalProteins}</h3>
        <h3>Fats: {totalFats}</h3>
        <h3>Carbohydrates: {totalCarbohydrates}</h3>
      </div>
      <div className="product-delete">
        <DelMealKey title={title} setMealKeys={setMealKeys} />
      </div>
      
    </div>
  );
};

export default Meal;
