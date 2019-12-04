import React from "react";
import { DietProvider } from "./components/DietContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Breakfast from "./components/Breakfast";
import Dinner from "./components/Dinner";
import Supper from "./components/Supper";
import UserInfo from "./components/UserInfo";
import Nav from "./components/Nav";
import Diet from "./components/Diet";
import About from "./components/About";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import PersonalCal from "./components/PersonalCal";

const App = () => {
  return (
    <div>
      <Router>
        <DietProvider>
          <Nav />
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <PersonalInfo />
                <Diet />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/dinner" component={Dinner} />
          <Route path="/supper" component={Supper} />
        </DietProvider>
      </Router>
    </div>
  );
};

export default App;
