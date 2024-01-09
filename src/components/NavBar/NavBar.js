import "./NavBar.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


export function NavBar() {
    const [animationClass, setAnimationClass] = useState("slide-from-top");
    const [toggleClass, setToggleClass] = useState(true);
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate();

    const handleNav = () => {
        setShowNav(true);
    }
    const handleNavClose = () => {
        setAnimationClass("slide-from-bottom");
        setToggleClass(false);
        setTimeout(() => {
            setShowNav(false);
            setAnimationClass("slide-from-top");
            setToggleClass(true);
        }, 900);
    }
    const handleNavRouting = (event) => {
        if(event.target.id === "About"){
            navigate("/");
        } else if(event.target.id === "Portfolio"){
            navigate("/portfolio");
        }
        setShowNav(false);
    }

    return (
        <nav>
            <ul className="header-ul">
                <p className="logo">VJ<span className="logo-dot">.</span></p>
                <div className="hamburger-menu" onClick={handleNav}>
                    <div className="hambar top"></div>
                    <div className="hambar centre"></div>
                </div>
            </ul>
            <div className={`nav-menu`} style={{ animationName: animationClass, display: showNav ? "flex" : "none" }}>
                <ul className="nav-ul">
                <p className="logo">VJ<span className="logo-dot">.</span></p>
                    <div className="hamburger-menu" onClick={handleNavClose}>
                        <div className={`closebar ${toggleClass ? "one" : "bar-animation-one"}`}></div>
                        <div className={`closebar ${toggleClass ? "two" : "bar-animation-two"}`}></div>
                    </div>
                </ul>
                <div className="nav-options-container">
                    {["About", "Portfolio"].map((item,index)=><p id={item} key={index} onClick={handleNavRouting} className={`${toggleClass ? "nav-open-animation" : "nav-close-animation"} nav-links`} style={toggleClass ? { animationDelay: `${index*150}ms`} : {animationDelay: `-${index*150}ms`}}>{item}</p>)}
                    <div className="nav-connect-container">{["LinkedIn", "Github", "Discord"].map((item,index)=><p key={index} className={`${toggleClass ? "nav-connect-links-open" : "nav-connect-links-close"}`} style={toggleClass ? { animationDelay: `${index*350}ms`} : {animationDelay: `0s`}}>{item}</p>)}</div>
                </div>
            </div>
        </nav>
    )
}