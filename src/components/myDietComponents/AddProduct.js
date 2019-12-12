import React from "react";

const AddProduct = ({
  title,
  id,
  calories,
  proteins,
  carbohydrates,
  fats,
  name
}) => {
  const addItem = e => {
    e.preventDefault();
    const array = JSON.parse(localStorage.getItem(`${title}`));
    array.food.push({
      id,
      name,
      calories: Math.round(calories),
      proteins: Math.round(proteins),
      carbohydrates: Math.round(carbohydrates),
      fats: Math.round(fats),
    });
    localStorage.setItem(`${title}`, JSON.stringify(array));
    window.location.assign(`/meals/${title}`);
  };
  return (
    <form onSubmit={addItem}>
      <button>Add</button>
    </form>
  );
};

export default AddProduct;
