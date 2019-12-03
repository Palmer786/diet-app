import React, { createContext, useState } from "react";

export const DietContext = createContext();

export const BreakfastProvider = props => {
  const [breakfast, setBreakfast] = useState("breakfast");
  return (
    <DietContext.Provider value={[breakfast, setBreakfast]}>
      {props.children}
    </DietContext.Provider>
  );
};