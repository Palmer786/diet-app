import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Breakfast from "./components/Breakfast";
import Dinner from "./components/Dinner";
import Supper from "./components/Supper";
import Nav from "./components/Nav";
import About from "./components/About";
import "./App.css";
import Homepage from './components/Homepage';

const App = () => {
  return (
    <div>
      <Router>
          <Nav />
          <Route
            path="/"
            exact
            component={Homepage}
          />
          <Route path="/about" component={About} />
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/dinner" component={Dinner} />
          <Route path="/supper" component={Supper} />
      </Router>
    </div>
  );
};

export default App;
