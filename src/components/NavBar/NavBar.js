import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


export function NavBar() {
    const [animationClass, setAnimationClass] = useState("slide-from-top");
    const [toggleClass, setToggleClass] = useState(true);
    const [showNav, setShowNav] = useState(false);

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

    return (
        <nav>
            <ul className="header-ul">
                <img src="./images/logo2.png" alt="logo" style={{ width: "60px", height: "60px" }}></img>
                <div className="hamburger-menu" onClick={handleNav}>
                    <div className="hambar top"></div>
                    <div className="hambar centre"></div>
                    <div className="hambar bottom"></div>
                </div>
            </ul>
            <div className={`nav-menu`} style={{ animationName: animationClass, display: showNav ? "flex" : "none" }}>
                <ul className="nav-ul">
                    <img src="./images/logo2.png" alt="logo" style={{ width: "60px", height: "60px" }}></img>
                    <div className={`close-menu ${toggleClass ? "nav-open-animation" : "nav-close-animation"}`} onClick={handleNavClose}>
                        <div className="closebar one"></div>
                        <div className="closebar two"></div>
                    </div>
                </ul>
                <div className="nav-options-container">
                    {["Home", "Portfolio", "Contacts", "Icons"].map((item,index)=><p className={toggleClass ? "nav-open-animation" : "nav-close-animation"} style={toggleClass ? { animationDelay: `${index*150}ms`} : {animationDelay: `-${index*150}ms`}}>{item}</p>)}
                </div>
            </div>
        </nav>
    )
}