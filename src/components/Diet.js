import React from "react";
import { Link } from "react-router-dom";

const Diet = () => {
  const navLinks = {
    textDecoration: "none",
    color: "white"
  };
  return (
    <div className="diet">
      <div className="diet-info">
        <div className="diet-details">
          <h3>Calories: 500/2000</h3>
          <h3>Fat: 15/40</h3>
          <h3>Protein: 35/80</h3>
          <h3>Carbohydrates: 60/220</h3>
        </div>
        <button>
          <Link to="/breakfast" style={navLinks}>
            My breakfast
          </Link>
        </button>
      </div>
      <div className="diet-info">
        <div className="diet-details">
          <h3>Calories: 500/2000</h3>
          <h3>Fat: 15/40</h3>
          <h3>Protein: 35/80</h3>
          <h3>Carbohydrates: 60/220</h3>
        </div>
        <button>
          <Link to="/dinner" style={navLinks}>
            My dinner
          </Link>
        </button>
      </div>
      <div className="diet-info">
        <div className="diet-details">
          <h3>Calories: 500/2000</h3>
          <h3>Fat: 15/40</h3>
          <h3>Protein: 35/80</h3>
          <h3>Carbohydrates: 60/220</h3>
        </div>
        <button>
          <Link to="/supper" style={navLinks}>
            My supper
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Diet;
