import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navLinks = {
    textDecoration: "none",
    color: "white"
  };
  return (
    <nav>
      <h1>LOGO</h1>
      <Link to="/" style={navLinks}>
        <h3>Meals</h3>
      </Link>
      <Link to="/about" style={navLinks}>
        <h3>About</h3>
      </Link>
      <h2>Login</h2>
    </nav>
  );
};
export default Nav;
