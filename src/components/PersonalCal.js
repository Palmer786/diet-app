import React from "react";

const PersonalCal = () => {
  const personalData = JSON.parse(localStorage.getItem("personal-data"));
  const foodValues = JSON.parse(localStorage.getItem("my-diet"));
  let caloriesSum =0;
  let fatSum = 0;
  let carbohydratesSum = 0;
  let proteinSum = 0;
  const breakfastSum = (foodValues[0].food.map(product => {
    caloriesSum += product.calories;
    fatSum += product.fat;
    proteinSum += product.proteins;
    carbohydratesSum += product.carbohydrates;
    return (caloriesSum,fatSum,proteinSum,carbohydratesSum);
  }));
  const dinnerSum = (foodValues[1].food.map(product => {
    caloriesSum += product.calories;
    fatSum += product.fat;
    proteinSum += product.proteins;
    carbohydratesSum += product.carbohydrates;
    return (caloriesSum,fatSum,proteinSum,carbohydratesSum);
  }));
  const supperSum = (foodValues[0].food.map(product => {
    caloriesSum += product.calories;
    fatSum += product.fat;
    proteinSum += product.proteins;
    carbohydratesSum += product.carbohydrates;
    return (caloriesSum,fatSum,proteinSum,carbohydratesSum);
  }));
  return (
    <div className="info">
<h1>Calories: {caloriesSum}/{personalData.calories}</h1>
      <h2>Protein: {proteinSum}/{personalData.protein}</h2>
      <h2>Fats: {fatSum}/{personalData.fat}</h2>
      <h2>Carbohydrates: {carbohydratesSum}/{personalData.carbohydrates}</h2>
    </div>
  );
};

export default PersonalCal;
