import React from "react";
import BreakfastSum from "./BreakfastSum";
import DinnerSum from "./DinnerSum";
import SupperSum from "./SupperSum";

const Diet = () => {
  return (
    <div className="diet">
      <BreakfastSum />
      <DinnerSum />
      <SupperSum />
    </div>
  );
};
export default Diet;
