import "./Projects.css";

export function Projects() {
    window.scrollTo(0, 0);
    return (<div className="portfolio-container">
        <p className="lg-text" style={{ marginBottom: "2rem", marginTop: "5rem" }}>Mini Projects</p>
        <div className="project-grid">
            <div className="grid-items" id="item1">
                <div className="project-details">
                    <div className="project-title-container">
                        <p className="project-title">Food Ordering App</p>
                        <p className="arrow">{`➤`}</p>
                    </div>
                    <p className="project-info">A mini project</p>
                    <div className="project-links-container">
                            <a target="_blank" href="https://pc-shop-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/project-1-neog" rel="noreferrer">Github</a>
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
                            <a target="_blank" href="https://pc-shop-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/project-1-neog" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
            <div className="grid-items" id="item3">
            <div className="project-details">
                    <div className="project-title-container">
                        <p className="project-title">Cash Register</p>
                        <p className="arrow">{`➤`}</p>
                    </div>
                    <p className="project-info">A mini app which performs just like a register machine.</p>
                    <div className="project-links-container">
                            <a target="_blank" href="https://pc-shop-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/project-1-neog" rel="noreferrer">Github</a>
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
                            <a target="_blank" href="https://pc-shop-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/project-1-neog" rel="noreferrer">Github</a>
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
                            <a target="_blank" href="https://pc-shop-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/project-1-neog" rel="noreferrer">Github</a>
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
                            <a target="_blank" href="https://pc-shop-vj.netlify.app/" rel="noreferrer">Live Code</a>
                            <a target="_blank" href="https://github.com/VinayJv/project-1-neog" rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}