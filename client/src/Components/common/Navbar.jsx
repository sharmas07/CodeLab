import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import hamburgerBtn from '../../images/hamburger-btn.png'

const Navbar = ({showSidebar ,setShowSidebar}) => {
  const [userId, setUserId] = useState('');
  useEffect(() => {
    setUserId(localStorage.getItem('userId'))
  }, [])
  
    const handleLogout = ()=>{
      if(userId){
        localStorage.clear();
        setUserId('')
      }
    }
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
      <Link onClick={handleLogout} to="/auth/signup" className="Login">
        {userId?"Logout":"Login"}
      </Link>
    </div>
    <img className='hamburger__btn' onClick={()=>setShowSidebar(!showSidebar)} src={hamburgerBtn} alt="" />
  </header>
    
    </div>
    </>
  )
}

export default Navbar