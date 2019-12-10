import React from "react";
import UserMacro from "./UserMacro";
import UserData from "./UserData";

const UserInfo = () => {
  if (localStorage.getItem("personal-data") === "{}" || !localStorage.getItem("personal-data")) return <UserData />;
  else return <UserMacro />;
};

export default UserInfo;
