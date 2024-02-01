import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Services } from "../Services/Services";
import { BsBalloonHeartFill } from "react-icons/bs";
import { useEffect, useRef } from "react";
import "./Portfolio.css";
import { NavLink } from "react-router-dom";


export function Portfolio() {
    window.scrollTo(0, 0);

    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();
    const card4Ref = useRef();
    const card5Ref = useRef();

    const options = {
        threshold: 0.35
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0].target;
            if(entries[0].isIntersecting){
                target.classList.add('creations-container');
            }
        }, options);
        observer.observe(card1Ref.current);
        observer.observe(card2Ref.current);
        observer.observe(card3Ref.current);
        observer.observe(card4Ref.current);
        observer.observe(card5Ref.current);
    }, []);

    return (
        <div>
            <Services />
            <div className="portfolio-container">
                <p className={`introduction-header-highlight`}>CREATIONS</p>
                <p className="lg-text" style={{ marginBottom: "2rem" }}>My Master Collection</p>
                <div className="projects-container">
                    <div className={`project-cards`} ref={card1Ref} id="card1">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Utter</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An social media website for people.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="https://utter-vj.netlify.app/" rel="noreferrer">Live Code</a>
                                <a target="_blank" href="https://github.com/VinayJv/social-media-project-2" rel="noreferrer">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className={`project-cards`} ref={card2Ref} id="card2">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">RGB Peripherals</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An e-commerce website.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="https://pc-shop-vj.netlify.app/" rel="noreferrer">Live Code</a>
                                <a target="_blank" href="https://github.com/VinayJv/project-1-neog" rel="noreferrer">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className={`project-cards`} ref={card3Ref} id="card3">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">MeetUp</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An event manager.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="https://meetup-vj.netlify.app/" rel="noreferrer">Live Code</a>
                                <a target="_blank" href="https://github.com/VinayJv/coding-round-8" rel="noreferrer">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to="/projects" className="navlinks">View More</NavLink>
            </div>
            <div className="portfolio-container">
                <p className="lg-text" style={{ marginBottom: "2rem" }}>Backend Projects</p>
                <div className="backend-project-container">
                    <div className={`backend-project-cards`} ref={card4Ref} id="card4">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Voyage</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An API endpoint.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="https://documenter.getpostman.com/view/23552591/2s9YJXaQxY" rel="noreferrer">View Documentation</a>
                            </div>
                        </div>
                    </div>
                    <div className={`backend-project-cards`} ref={card5Ref} id="card5">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Fitness Pal</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An API endpoint.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="https://documenter.getpostman.com/view/23552591/2s9YytfznX" rel="noreferrer">View Documentation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-container" id="connect">
                <p className="introduction-header-highlight"> LET'S CONNECT</p>
                <p className="lg-text" style={{ marginBottom: "1rem" }}>Ways To Contact Me</p>
                <p className="sm-text">Feel free to reach out via the provided social media links or mail me at <span style={{textDecorationLine: "underline"}}>vinay.jatav.dev@gmail.com</span>. Excited to connect with you! 😇
                </p>
                <a href="http://localhost:3000/VinayJatav(Resume).pdf" download className="download-btn" style={{ margin: "1rem 0", textDecorationLine: "underline"}}>Download Resume</a>
                <div className="contacts-container">
                    <a className="contact-bg" href="https://www.linkedin.com/in/vinay-jatav-1a3795247/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="contacts-icons" />
                        <p>LinkedIn</p>
                    </a>
                    <a className="contact-bg" href="https://github.com/VinayJv" target="_blank" rel="noreferrer">
                        <FaGithub className="contacts-icons" />
                        <p>Github</p>
                    </a>
                    <a className="contact-bg" href="https://twitter.com/Vinay_jv_" target="_blank" rel="noreferrer">
                        <FaXTwitter className="contacts-icons" />
                        <p>Twitter</p>
                    </a>
                </div>
            </div>
            <div className="portfolio-container bg-color footer">
                <div className="quote-container">
                    <p className="quote"><span>“</span>As he thinks, so he is; as he continues to think, so he remains.<span>”</span></p>
                    <p className="author">- James Allen</p>
                </div>
                <p style={{ color: "gray" }}>Made with Love!<BsBalloonHeartFill className="heart" /></p>
            </div>
        </div>);
}