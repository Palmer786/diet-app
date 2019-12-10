import React from "react";
import Meal from "./Meal";

const MyDiet = () => {
  const mealKeys = ["breakfast", "dinner", "supper"]
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
