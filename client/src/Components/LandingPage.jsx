import React from "react";
import "./Styles/LandingPage.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import home_image from "../images/pg.png";
function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} className="logo" alt="" />
        </div>
        <div className="nav-links">
          <a href="#" className="home">
            Home
          </a>
          <Link to="/auth/signup" className="Login">
            Login
          </Link>
        </div>
      </header>

      <div className="home-content">
        <div className="content">
          <div className="start">
          <h1>Conquer coding assignments with confidence.</h1>
            <Link className="start-coding-button" to="/auth/signup">
              Start Coding
            </Link>
          </div>
        <img src={home_image} className="image" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
