import React from "react";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
  } from 'react-router-dom';

function HeaderNavigation () {
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
                <li className="home"><Link  to="/login" >Login</Link></li>
 
            </ul>
        </header>
    )
}

export default HeaderNavigation;
