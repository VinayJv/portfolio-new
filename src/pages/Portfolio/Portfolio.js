import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Services } from "../Services/Services";
import { BsBalloonHeartFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react"; 
import "./Portfolio.css";


export function Portfolio() {
    const [isCardVisible, setIsCardVisible] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false
    });
    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();
    const card4Ref = useRef();
    const card5Ref = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const target = entries[0].target.id;
            if(target === "card1") {
                setIsCardVisible({...isCardVisible, card1: entries[0].isIntersecting});
            } else if(target === "card2"){
                setIsCardVisible({...isCardVisible, card2: entries[0].isIntersecting});
            } else if(target === "card3"){
                setIsCardVisible({...isCardVisible, card3: entries[0].isIntersecting});
            } else if(target === "card4"){
                setIsCardVisible({...isCardVisible, card4: entries[0].isIntersecting});
            } else {
                setIsCardVisible({...isCardVisible, card5: entries[0].isIntersecting});
            }
        });
        observer.observe(card1Ref.current);
        observer.observe(card2Ref.current);
        observer.observe(card3Ref.current);
        observer.observe(card4Ref.current);
        observer.observe(card5Ref.current);
    },[]);

    return (
        <div>
            <Services />
            <div className="portfolio-container">
                <p className={`introduction-header-highlight`}>CREATIONS</p>
                <p className="lg-text" style={{ marginBottom: "2rem" }}>My Master Collection</p>
                <div className="projects-container">
                    <div className={`project-cards ${isCardVisible.card1 ? "creations-container" : undefined}`} ref={card1Ref} id="card1">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Utter</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An social media website for people.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">Live Code</a>
                                <a target="_blank" href="">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className={`project-cards ${isCardVisible.card2 ? "creations-container" : undefined}`} ref={card2Ref} id="card2">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">RGB Peripherals</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An e-commerce website.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">Live Code</a>
                                <a target="_blank" href="">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className={`project-cards ${isCardVisible.card3 ? "creations-container" : undefined}`} ref={card3Ref} id="card3">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">MeetUp</p>
                                <p className="arrow">{`➤`}</p>
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
                    <div className={`backend-project-cards ${isCardVisible.card4 ? "creations-container" : undefined}`} ref={card4Ref} id="card4">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Voyage</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An API endpoint.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">View Documentation</a>
                            </div>
                        </div>
                    </div>
                    <div className={`backend-project-cards ${isCardVisible.card5 ? "creations-container" : undefined}`} ref={card5Ref} id="card5">
                        <div className="floating-project-info">
                            <div className="project-title-container">
                                <p className="project-title">Fitness Pal</p>
                                <p className="arrow">{`➤`}</p>
                            </div>
                            <p className="project-info">An API endpoint.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">View Documentation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-container" id="connect">
                <p className="introduction-header-highlight"> LET'S CONNECT</p>
                <p className="lg-text" style={{ marginBottom: "1rem" }}>Ways To Contact Me</p>
                <p className="sm-text" style={{ marginBottom: "1rem" }}>Feel free to reach out via the provided social media links. Excited to connect with you! 😇
                </p>
                <div className="contacts-container">
                    <a className="contact-bg" href="">
                        <FaLinkedin className="contacts-icons" />
                        <p>LinkedIn</p>
                    </a>
                    <a className="contact-bg" href="">
                        <FaGithub className="contacts-icons" />
                        <p>Github</p>
                    </a>
                    <a className="contact-bg" href="">
                        <FaDiscord className="contacts-icons" />
                        <p>Discord</p>
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