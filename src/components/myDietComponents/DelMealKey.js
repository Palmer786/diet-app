import React from "react";

const DelMealKey = ({ title, setMealKeys }) => {
  const delMealKey = () => {
    const array = JSON.parse(localStorage.getItem("mealKeys"));
    setMealKeys(array.filter(key => key !== title));
    localStorage.removeItem(`${title}`);
  };
  return <button onClick={delMealKey}>Delete</button>;
};

export default DelMealKey;
