import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import MyDiet from "./components/myDietComponents/MyDiet";
import MealDetails from "./components/myDietComponents/MealDetails";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Route path="/" exact component={MyDiet} />
        <Route path="/about" exact component={About} />
        <Route path="/meals/:title" exact component={MealDetails} />
      </Router>
    </div>
  );
};

export default App;
