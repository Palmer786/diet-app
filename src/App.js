import React from "react";
import { BreakfastProvider } from "./components/DietContext";
import UserInfo from "./components/UserInfo";
import Nav from "./components/Nav";
import Diet from "./components/Diet";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import PersonalCal from "./components/PersonalCal";

const App = () => {
  return (
    <div>
      <BreakfastProvider>
        <Nav />
        <UserInfo/>
        <Diet />
      </BreakfastProvider>
    </div>
  );
};

export default App;
