import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
  } from 'react-router-dom';
import Footer from "./Footer";
import HeaderNavigation from "./HeaderNavigation";
import GoToTopButton from "./GoToTop";
import AddCourse from "./AddCourse";
import Wrapper from "./Wrapper";
import LoginPage from "./Login";
import AboutUs from "./AboutUS";
import ContactForm from "./Contact";




const App = () => {
    const [param, setParam] = useState(false)
    const handleLoginSuccess = (param) =>{
        setParam(param)
    };
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <HashRouter>
            <HeaderNavigation paramStateOfUser={param}/>
            <Routes>
            <Route path="/" element={<Wrapper />} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/courses" element={<AddCourse/>} />
            <Route path="/Login" element={<LoginPage handleLoginSuccess={handleLoginSuccess}/>} />
            </Routes>
            </HashRouter>
            <GoToTopButton/>
            <Footer/>

            
        </>
    )
}
ReactDOM.render(

<App/>,

document.getElementById("app"));