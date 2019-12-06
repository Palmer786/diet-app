import React from "react";

const PersonalCal = () => {
  const data = JSON.parse(localStorage.getItem("personal-data"));
  return (
    <div className="info">
      <h1>Calories: 0/{data.calories}</h1>
      <h2>Protein: 0/{data.protein}</h2>
      <h2>Fats: 0/{data.fat}</h2>
      <h2>Carbohydrates: 0/{data.carbohydrates}</h2>
    </div>
  );
};

export default PersonalCal;
