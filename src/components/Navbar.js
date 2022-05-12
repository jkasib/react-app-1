import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png'
import  { Link, NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {

    const [isTrue, setIsTrue] = useState(false);


  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="leftSide">
                    <Link to='/'><img src={Logo} alt="logo" /></Link>
                </div>
                <div className={`rightSide ${isTrue && 'rightSideResp'}`}>
                    <NavLink to='/' onClick={() => setIsTrue(false)}>Home</NavLink>
                    <NavLink to='/menu' onClick={() => setIsTrue(false)}>Menu</NavLink>
                    <NavLink to='/about' onClick={() => setIsTrue(false)}>About</NavLink>
                    <NavLink to='/contact' onClick={() => setIsTrue(false)}>Contact</NavLink>
                </div>
                <div className="responsive-menu">
                    {
                        <i className={isTrue ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={() => setIsTrue(!isTrue)}></i>
                    }
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar