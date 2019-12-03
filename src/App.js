import React from "react";
import { BreakfastProvider } from "./components/DietContext";
import UserInfo from "./components/UserInfo";
import "./App.css";

const App = () => {
  return (
    <div>
      <BreakfastProvider>
        <UserInfo />
      </BreakfastProvider>
    </div>
  );
};

export default App;
