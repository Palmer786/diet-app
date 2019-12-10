import React from "react";
import Userinfo from "./userInfoComponents/UserInfo";
import MyDiet from './myDietComponents/MyDiet';

const Homepage = () => {
  return (
    <div>
      <Userinfo />
      <MyDiet />
    </div>
  );
};
export default Homepage;
