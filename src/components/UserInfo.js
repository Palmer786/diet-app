import React, { useContext } from "react";
import { DietContext } from "./DietContext";

const UserInfo = () => {
  const [breakfast, setBreakfast] = useContext(DietContext);
  return (
    <div>
      <h3>{breakfast}</h3>
    </div>
  );
};

export default UserInfo;
