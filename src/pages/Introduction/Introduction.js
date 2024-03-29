import "./Introduction.css";
import background from "./Ellipse.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




export function Introduction() {
    window.scrollTo(0, 0);
    return (
        <>
            <div className="introduction-container">
                <div className="introduction-info">
                    <div>
                        <p className="name-text">Vinay</p>
                        <p className="name-text margin-set">Jatav <span className="dot">.</span></p>
                    </div>
                    <div className="bar"></div>
                    <div className="contact-icons-container">
                        <a href="https://www.linkedin.com/in/vinay-jatav-1a3795247/" target="_blank" rel="noreferrer"><FaLinkedin className="contact-icons"/></a>
                        <a href="https://github.com/VinayJv" target="_blank" rel="noreferrer"><FaGithub className="contact-icons"/></a>
                        <a href="https://twitter.com/Vinay_jv_" target="_blank" rel="noreferrer"><FaXTwitter className="contact-icons"/></a>
                    </div>
                </div>
                <div className="image-container">
                    <div className="bg-circle" style={{ backgroundImage: `url(${background})`}}></div>
                    <img src="./images/Photo.png" alt="" className="intro-img"></img>
                </div>
                <div className="introduction-text hide-from-mobile">
                    <p className="introduction-header-highlight">INTRODUCTION</p>
                    <p className="lg-text">Full Stack Web</p>
                    <p className="lg-text">Developer</p>
                    <p className="introduction-sm-text">Highly motivated and detail-oriented web developer with a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack.</p>
                </div>
            </div>
            <div className="introduction-mobile only-mobile">
                    <p className="introduction-header-highlight">INTRODUCTION</p>
                    <p className="lg-text">Full Stack Web <span>Developer</span></p>
                    <p className="introduction-sm-text">Hello, I am Vinay Jatav. I am a full stack web developer dedicated to craft immersive and user-friendly experiences with a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack. A rapid learner dedicated to efficiently assimilating new concepts, and apply newfound knowledge to elevate the quality of web development projects. </p>
            </div>
        </>);
}