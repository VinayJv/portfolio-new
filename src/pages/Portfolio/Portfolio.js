import "./Portfolio.css";

export function Portfolio(){
    return (<div className="portfolio-container bg-color">
        <p className="introduction-header-highlight">PORTFOLIO</p>
        <p className="lg-text">My Master Collection</p>
        <p className="introduction-sm-text text-container">Explore my portfolio to discover a range of web development projects, from dynamic e-commerce platforms to interactive social media applications, each project demonstrates my proficiency in responsive design, efficient back-end functionality, and intuitive front-end interfaces.</p>
        <div className="portfolio-container">
            <ul>
                <li>All</li>
                <li>FRONT-END</li>
                <li>BACK-END</li>
            </ul>
        </div>
    </div>);
}