import React, { createContext, useState, useEffect } from "react";

export const DietContext = createContext();

export const DietProvider = props => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("my-diet")) || [
      {
        key: "breakfast",
        food: [
          {
            id: 1,
            name: "chleb",
            calories: 50
          },
          {
            id: 2,
            name: "jajko",
            calories: 60
          }
        ]
      },
      {
        key: "dinner",
        food: [
          {
            id: 5,
            name: "pomidor",
            calories: 120
          },
          {
            id: 22,
            name: "orzech",
            calories: 30
          }
        ]
      },
      {
        key: "supper",
        food: [
          {
            id: 125,
            name: "ser",
            calories: 75
          },
          {
            id: 286,
            name: "masło",
            calories: 320
          }
        ]
      }
    ]
  );

  useEffect(() => {
    localStorage.setItem("my-diet", JSON.stringify(items));
  }, [items]);

  return (
    <DietContext.Provider value={[items, setItems]}>
      {props.children}
    </DietContext.Provider>
  );
};
