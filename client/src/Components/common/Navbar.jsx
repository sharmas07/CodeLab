import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import hamburgerBtn from '../../images/hamburger-btn.png'

const Navbar = ({showSidebar ,setShowSidebar}) => {
    
  return (
    <>
    <div className="header">
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
    <img className='hamburger__btn' onClick={()=>setShowSidebar(!showSidebar)} src={hamburgerBtn} alt="" />
  </header>
    
    </div>
    </>
  )
}

export default Navbar