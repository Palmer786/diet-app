import React, { useContext } from "react";
import { DietContext } from "./DietContext";
import PersonalInfo from "./PersonalInfo";
import PersonalCal from "./PersonalCal";

const UserInfo = () => {

  if (JSON.parse(localStorage.getItem("personal-data")) === null) return <PersonalInfo />;
  else if (JSON.parse(localStorage.getItem("personal-data")) !== null) return <PersonalCal />;
};

export default UserInfo;
