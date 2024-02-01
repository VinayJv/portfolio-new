import "./Projects.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";


export function Projects() {
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    return (<div className="portfolio-container">
        <div className="mini-projects-heading-container">
            <FaArrowLeft className="back-arrow" onClick={()=>navigate("/portfolio")}/>
            <p className="lg-text">Mini Projects</p>
        </div>
        <div className="project-grid">
            <div className="grid-items" id="item1">
                <div className="project-details">
                    <div className="project-title-container">
                        <p className="project-title">Food Ordering App</p>
                        <p className="arrow">{`➤`}</p>
                    </div>
                    <p className="project-info">A mini project</p>
                    <div className="project-links-container">
                            <a target="_blank" href="https://restaurant-app-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/coding-round-6" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
            <div className="grid-items" id="item2">
            <div className="project-details">
                    <div className="project-title-container">
                        <p className="project-title">Movie Review</p>
                        <p className="arrow">{`➤`}</p>
                    </div>
                    <p className="project-info">A small app for rating movies.</p>
                    <div className="project-links-container">
                            <a target="_blank" href="https://movie-rating-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/coding-round-11" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
            <div className="grid-items" id="item3">
            <div className="project-details">
                    <div className="project-title-container">
                        <p className="project-title">Cash Register</p>
                        <p className="arrow">{`➤`}</p>
                    </div>
                    <p className="project-info">Cash register but in app.</p>
                    <div className="project-links-container">
                            <a target="_blank" href="https://cash-register-managervj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/Cash-Register" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
            <div className="grid-items" id="item4">
            <div className="project-details">
                    <div className="project-title-container">
                        <p className="project-title">Books Tracker</p>
                        <p className="arrow">{`➤`}</p>
                    </div>
                    <p className="project-info">Keep an eye on your reading history.</p>
                    <div className="project-links-container">
                            <a target="_blank" href="https://book-app-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/BookApp" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
            <div className="grid-items" id="item5">
            <div className="project-details">
                    <div className="project-title-container">
                        <p className="project-title">Video Gallery</p>
                        <p className="arrow">{`➤`}</p>
                    </div>
                    <p className="project-info">A small youtube gallery.</p>
                    <div className="project-links-container">
                            <a target="_blank" href="https://coding-round-9-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/coding-round-9" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
            <div className="grid-items" id="item6">
            <div className="project-details">
                    <div className="project-title-container">
                        <p className="project-title">Markdown Previewer</p>
                        <p className="arrow">{`➤`}</p>
                    </div>
                    <p className="project-info">Convert text into markdown.</p>
                    <div className="project-links-container">
                            <a target="_blank" href="https://markdown-preview-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/markdown-previewer" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}