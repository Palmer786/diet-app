import React from "react";

const UserMacro = () => {
  const mealKeys = JSON.parse(localStorage.getItem("mealKeys"));
  const personalData = JSON.parse(localStorage.getItem("personal-data"));
  let caloriesSum = 0;
  let fatsSum = 0;
  let carbohydratesSum = 0;
  let proteinSum = 0;


    mealKeys.map(key => {
      let array = JSON.parse(localStorage.getItem(`${key}`));
      array.food.map(item => {
        caloriesSum += item.calories;
        fatsSum += item.fats;
        proteinSum += item.proteins;
        carbohydratesSum += item.carbohydrates;
      })
      
    });

    
   
 

  return (
    <div className="info">
      <h1>
        Calories: {caloriesSum}/{personalData.calories}
      </h1>
      <h2>
        Protein: {proteinSum}/{personalData.protein}
      </h2>
      <h2>
        Fats: {fatsSum}/{personalData.fats}
      </h2>
      <h2>
        Carbohydrates: {carbohydratesSum}/{personalData.carbohydrates}
      </h2>
    </div>
  );
};

export default UserMacro;
