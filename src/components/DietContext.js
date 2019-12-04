import React, { createContext, useState } from "react";

export const DietContext = createContext();

export const DietProvider = props => {
  const [items, setItems] = useState([
    {
      key: "breakfast",
      food: [
        {
          id: 1,
          name: "Carrot",
          calories: 50
        }
      ]
    },
    {
      key: "dinner",
      food: [
        {
          id: 5,
          name: "Bread",
          calories: 120
        }
      ]
    },
    {
      key: "food",
      food: [
        {
          id: 12,
          name: "egg",
          calories: 50
        }
      ]
    }
  ]);
  return (
    <DietContext.Provider value={[items, setItems]}>
      {props.children}
    </DietContext.Provider>
  );
};
