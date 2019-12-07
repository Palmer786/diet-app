import React, { useContext, useState } from "react";
import { DietContext } from "./DietContext";

const Breakfast = () => {
  const [items, setItems] = useContext(DietContext);
  const [name, setName] = useState("");
  const [cal, setCal] = useState("");
  const [pro, setPro] = useState("");
  const [fat, setFat] = useState("");
  const [carbo, setCarbo] = useState("");

  const updateName = e => {
    setName(e.target.value);
  };
  const updateCal = e => {
    setCal(+e.target.value);
  };
  const updatePro = e => {
    setPro(+e.target.value);
  };
  const updateFat = e => {
    setFat(+e.target.value);
  };
  const updateCarbo = e => {
    setCarbo(+e.target.value);
  };
  const addItem = e => {
    e.preventDefault();
    setItems([...items], items[0].food[(items[0].food.length)] = { name, calories: cal, proteins: pro, fat, carbohydrates: carbo })
  };
  return (
    <div>
      <h1>Breakfast</h1>
      <form onSubmit={addItem}>
        Name:
        <input type="text" name="name" value={name} onChange={updateName} />
        Cal: <input type="number" name="cal" value={cal} onChange={updateCal} />
        Pro: <input type="number" name="pro" value={pro} onChange={updatePro} />
        Fat: <input type="number" name="fat" value={fat} onChange={updateFat} />
        Carbo:
        <input type="number" name="carbo" value={carbo} onChange={updateCarbo} />
        <button>Add</button>
      </form>
      <div>
        {items[0].food.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Calories: {item.calories}</p>
            <p>Proteins: {item.proteins}</p>
            <p>Fat: {item.fat}</p>
            <p>Carbohydrates: {item.carbohydrates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
