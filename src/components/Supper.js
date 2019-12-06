import React, { useContext } from "react";
import { DietContext } from "./DietContext";

const Supper = () => {
  const [items, setItems] = useContext(DietContext);
  return (
    <div>
      <h1>Supper</h1>
      {items[2].food.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.calories}</p>
        </div>
      ))}
    </div>
  );
};

export default Supper;
