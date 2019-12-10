import React from "react";

const DelProduct = ({ id, setItems, title }) => {
  const deleteProduct = () => {
    const tab = JSON.parse(localStorage.getItem(`${title}`));
    const newArray = tab.food.filter(item => item.id !== id);
    setItems({key: `${title}`, food: newArray});
  };

  return <button onClick={deleteProduct}>Delete</button>;
};

export default DelProduct;
