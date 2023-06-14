import React from "react";
import "./Styles/LandingPage.css";
import { Link } from "react-router-dom";
import g from "../images/G.png";
import i from "../images/pg.png";
function Header() {
  return (
    <>
      <header>
        <div class="logo">
          <img src={g} class="logo" alt="" />
        </div>
        <div class="nav-links">
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
            <Link class="start-coding-button" to="/auth/signup">
              Start Coding
            </Link>
          </div>
        <img src={i} className="i" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
