import React, { useEffect, useState } from "react";
import Meal from "./Meal";
import AddMealKeys from "./AddMealKey";

const MyDiet = () => {
  const [mealKeys, setMealKeys] = useState(
    JSON.parse(localStorage.getItem("mealKeys")) || [
      "breakfast",
      "dinner",
      "supper"
    ]
  );
  useEffect(() => {
    localStorage.setItem("mealKeys", JSON.stringify(mealKeys));
  }, [mealKeys]);

  return (
    <div>
      <div className="diet">
        {mealKeys.map(key => (
          <div>
            <Meal title={key} setMealKeys={setMealKeys} />
          </div>
        ))}
      </div>
      <AddMealKeys setMealKeys={setMealKeys} />
    </div>
  );
};

export default MyDiet;
