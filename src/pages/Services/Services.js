import "./Services.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";








export function Services() {
    return (<div className="services-container">
        <p className="introduction-header-highlight">SERVICES</p>
        <p className="lg-text">What I Am Great At</p>
        <p className="introduction-sm-text sm-text-additional">Skilled in MERN (MongoDB, Express.js, React, Node.js) stack, I develop scalable web applications. Proficient in MongoDB for database management, React for dynamic UIs, and Express.js/Node.js for seamless server-side logic.</p>
        <div className="services-inner-container">
            <div className="skill-bg"><FaReact className="services-icon"/><p>React</p></div>
            <div className="skill-bg"><IoLogoJavascript className="services-icon"/><p>Javascript</p></div>
            <div className="skill-bg"><FaHtml5 className="services-icon"/><p>HTML</p></div>
            <div className="skill-bg"><FaCss3Alt className="services-icon"/><p>CSS</p></div>
            <div className="skill-bg"><FaNodeJs className="services-icon"/><p>Node js</p></div>
            <div className="skill-bg"><FaFigma className="services-icon"/><p>Figma</p></div>
            <div className="skill-bg"><IoIosGitBranch className="services-icon"/><p>Git</p></div>
        </div>
    </div>);
}