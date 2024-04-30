import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
                <p className="logo" onClick={()=>navigate("/")}>VJ<span className="logo-dot">.</span></p>
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
                    <a href="https://docs.google.com/document/d/1ZranqAqHrh2VQedppWkTvjyun1e5mS2SyLl20vV-IiI/edit?usp=sharing" download className={`${toggleClass ? "nav-connect-links-open" : "nav-connect-links-close"} download-btn`} style={toggleClass ? { animationDelay: `${350}ms`} : {animationDelay: `0s`}}>Download Resume</a>
                </div>
            </div>
        </nav>
    )
}