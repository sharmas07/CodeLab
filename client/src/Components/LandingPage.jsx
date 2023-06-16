import React from "react";
import "./Styles/LandingPage.css";
import { Link } from "react-router-dom";
import home_image from "../images/pg.png";
function Header() {
  return (
    <>

      <div className="home-content">
        <div className="content">
          <div className="start">
          <p className="home__txt">Conquer coding assignments with confidence.</p>
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
