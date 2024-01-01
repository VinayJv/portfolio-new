import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Services } from "../Services/Services";
import "./Portfolio.css";
import { BsBalloonHeartFill } from "react-icons/bs";


export function Portfolio() {
    return (
        <div>
            <Services />
            <div className="portfolio-container">
                <p className="introduction-header-highlight">CREATIONS</p>
                <p className="lg-text" style={{ marginBottom: "2rem" }}>My Master Collection</p>
                <div className="projects-container">
                    <div className="project-cards">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Utter</p>
                                <p className="arrow">{`➟`}</p>
                            </div>
                            <p className="project-info">An social media website for people.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">Live Code</a>
                                <a target="_blank" href="">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-cards">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">RGB Peripherals</p>
                                <p className="arrow">{`➟`}</p>
                            </div>
                            <p className="project-info">An e-commerce website.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">Live Code</a>
                                <a target="_blank" href="">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-cards">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">MeetUp</p>
                                <p className="arrow">{`➟`}</p>
                            </div>
                            <p className="project-info">An event manager.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">Live Code</a>
                                <a target="_blank" href="">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-container">
                <p className="lg-text" style={{ marginBottom: "2rem" }}>Backend Projects</p>
                <div className="backend-project-container">
                    <div className="backend-project-cards">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Voyage</p>
                                <p className="arrow">{`➟`}</p>
                            </div>
                            <p className="project-info">An API endpoint.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">View Documentation</a>
                            </div>
                        </div>
                    </div>
                    <div className="backend-project-cards">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Fitness Pal</p>
                                <p className="arrow">{`➟`}</p>
                            </div>
                            <p className="project-info">An API endpoint.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">View Documentation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-container">
                <p className="introduction-header-highlight">CONNECT</p>
                <p className="lg-text" style={{ marginBottom: "1rem" }}>Ways To Contact Me</p>
                <p className="sm-text" style={{ marginBottom: "1rem" }}>Feel free to reach out via the provided social media links. Excited to connect with you! 😇
                </p>
                <div className="contacts-container">
                    <a className="contact-bg" href="">
                        <FaLinkedin className="contacts-icons"/>
                        <p>LinkedIn</p>
                    </a>
                    <a className="contact-bg" href="">
                        <FaGithub className="contacts-icons"/>
                        <p>Github</p>
                    </a>
                    <a className="contact-bg" href="">
                        <FaDiscord className="contacts-icons"/>
                        <p>Discord</p>
                    </a>
                </div>
            </div>
            <div className="portfolio-container bg-color footer">
                <p>Made with Love!<BsBalloonHeartFill className="heart"/></p>
            </div>
        </div>);
}