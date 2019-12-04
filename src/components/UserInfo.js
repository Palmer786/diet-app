import React, { useContext } from "react";
import { DietContext } from "./DietContext";
import PersonalInfo from "./PersonalInfo";
import PersonalCal from "./PersonalCal";

const UserInfo = () => {

  if (localStorage.getItem("personal-data") === "{}" || !localStorage.getItem("personal-data")) return <PersonalInfo />;
  else return <PersonalCal />;
};

export default UserInfo;
