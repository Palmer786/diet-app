import React, { useEffect, useState } from "react";
import Meal from "./Meal";

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
    <div className="diet">
      {mealKeys.map(key => (
        <div>
          <Meal title={key} />
        </div>
      ))}
    </div>
  );
};

export default MyDiet;
