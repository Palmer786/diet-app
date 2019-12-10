import React, { useState } from "react";

const AddMealKeys = ({ setMealKeys }) => {
  const [meal, setMeal] = useState("");
  const updateMeal = e => {
    setMeal(e.target.value);
  };
  const addNewMeal = e => {
    e.preventDefault();
    const keys = JSON.parse(localStorage.getItem("mealKeys"))
    keys.push(meal);
    setMealKeys(keys);
  };
  return (
    <form onSubmit={addNewMeal}>
      <h2>Add new meal</h2>
      Name: <input type="text" name="name" value={meal} onChange={updateMeal} />
      <button>Add</button>
    </form>
  );
};

export default AddMealKeys;