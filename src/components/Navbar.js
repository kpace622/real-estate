import React from 'react';
import logo from '../images/logo.svg'
import './Navbar.css'

const NavBar = () => {

  function openNav() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return(
    <>
      <div className="topnav">
        <div className='inner-nav'>
          <img src={logo} alt='logo'/>
          <h2 className='nav-title'>Real Calculator</h2>
          <div id="navLinks">
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <a href="#" onClick={openNav}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default NavBar;