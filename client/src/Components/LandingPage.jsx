import React from "react";
import "./Styles/LandingPage.css";
import { Link } from "react-router-dom";
import home_image from "../images/pg.png";
import Slide from 'react-reveal/Slide';

function Header() {
  return (
    <>

      <div className="home-content">
        <div className="content">
          <div className="start">
            <Slide left cascade><div><p className="home__txt">Conquer coding assignments with confidence.</p></div></Slide>
          
            <Link className="start-coding-button" to="/auth/signup">
              Start Coding
            </Link>
          </div>
          <Slide right>
        <img src={home_image} className="image" alt="" /></Slide>
        </div>
      </div>
    </>
  );
}

export default Header;
