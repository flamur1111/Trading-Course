import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
function HeaderNavigation(props) {
const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('user');
    // TODO: Implement logout functionality
  }
    return (
        <header>
            <div className="logo">
                <h1>
                <a href="index.html">Forex</a>
                </h1>
                <span>Trading</span>
            </div>
            <ul className="lis">
                <li className="home"><Link  to="/">Welcome</Link></li>
                {/* <li className="home"><Link to="/courses">Courses</Link></li> */}
                <li className="home"><Link to="/contact">Contact</Link></li>
                <li className="home"><Link to="/about">About Us</Link></li>
                {location.pathname === "/courses" && (
                <li className="home"><Link to="/login" onClick={handleLogout}>Logout</Link></li>
                )}
                {location.pathname !== "/courses" && (
                <li className="home"><Link to="/login">Login</Link></li>
                 )}
            </ul>
            <Outlet/>
        </header>
    );
}
export default HeaderNavigation;