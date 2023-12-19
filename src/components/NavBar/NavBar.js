import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


export function NavBar() {
    const [showNav, setShowNav] = useState(false);

    const handleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <nav>
            <ul>
                <div>
                    <img src="./images/logo.png" alt="logo"></img>
                </div>
                <div className="hide-from-mobile">
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <p>icons</p>
                </div>
                {showNav ? <AiOutlineClose size={40} color="white" style={{ cursor: "pointer" }} onClick={handleNav}/> : <GiHamburgerMenu size={40} color="white" style={{ cursor: "pointer" }} className="only-mobile" onClick={handleNav} />
                }
            </ul>
            <div className={showNav ? "mobile-nav-show" : "mobile-nav-hide"}>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact</li>
                <p>icons</p>
            </div>
        </nav>
    )
}