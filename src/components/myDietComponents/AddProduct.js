import React, { useState } from "react";

const AddProduct = ({ setItems, title }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [cal, setCal] = useState("");
  const [pro, setPro] = useState("");
  const [fat, setFat] = useState("");
  const [carbo, setCarbo] = useState("");

  const updateName = e => {
    setName(e.target.value);
  };
  const updateId = e => {
    setId(+e.target.value);
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

  const addProduct = e => {
    e.preventDefault();
    const array = JSON.parse(localStorage.getItem(`${title}`));
    array.food.push({
      id,
      name,
      calories: cal,
      proteins: pro,
      fats: fat,
      carbohydrates: carbo
    });
    setItems(array);
  };

  return (
    <form className="myList" onSubmit={addProduct}>
      Name:
      <input type="text" name="name" value={name} onChange={updateName} />
      Id: <input type="number" name="id" value={id} onChange={updateId} />
      Cal: <input type="number" name="cal" value={cal} onChange={updateCal} />
      Pro: <input type="number" name="pro" value={pro} onChange={updatePro} />
      Fat: <input type="number" name="fat" value={fat} onChange={updateFat} />
      Carbo:
      <input type="number" name="carbo" value={carbo} onChange={updateCarbo} />
      <button>Add</button>
    </form>
  );
};

export default AddProduct;
