import React from "react";
import { BreakfastProvider } from "./components/DietContext";
import UserInfo from "./components/UserInfo";
import Nav from "./components/Nav";
import Diet from "./components/Diet";
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <BreakfastProvider>
        <UserInfo />
        <Diet />
      </BreakfastProvider>
    </div>
  );
};

export default App;
