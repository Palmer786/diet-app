import React from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalCal from "./PersonalCal";

const UserInfo = () => {

  if (localStorage.getItem("personal-data") === "{}" || !localStorage.getItem("personal-data")) return <PersonalInfo />;
  else return <PersonalCal />;
};

export default UserInfo;
