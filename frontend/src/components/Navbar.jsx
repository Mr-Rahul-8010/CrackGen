import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    crackGen
                </div>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/subjects">Subjects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
