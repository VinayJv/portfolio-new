import { Services } from "../Services/Services";
import "./Portfolio.css";

export function Portfolio() {
    return (
        <div>
            <Services />
            <div className="portfolio-container bg-color">
                <p className="introduction-header-highlight">CREATIONS</p>
                <p className="lg-text" style={{ marginBottom: "2rem" }}>My Master Collection</p>
                <div className="projects-container">
                    <div className="project-cards">
                        <div className="floating-project-info">
                            <p className="project-title">Utter</p>
                            <p className="project-info">An social media website for people.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">Live Code</a>
                                <a target="_blank" href="">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-cards">
                        <div className="floating-project-info">
                            <p className="project-title">RGB Peripherals</p>
                            <p className="project-info">An e-commerce website.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">Live Code</a>
                                <a target="_blank" href="">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-cards">
                        <div className="floating-project-info">
                            <p className="project-title">MeetUp</p>
                            <p className="project-info">An event manager.</p>
                            <div className="project-links-container">
                                <a target="_blank" href="">Live Code</a>
                                <a target="_blank" href="">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}