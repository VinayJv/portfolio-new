import "./Introduction.css";

export function Introduction() {
    return (
        <div className="introduction-container">
            <div>
                <div>
                    <p className="name-text">Vinay</p>
                    <p className="name-text margin-set">Jatav <span>.</span></p>
                </div>
                <div className="bar"></div>
                <p className="introduction-sm-text">Instagram | LinkedIn</p>
                <p className="introduction-sm-text">Dribble | Behance</p>
            </div>
            <div className="image-container introduction-container-child">
                <img src="./images/main.png"></img>
            </div>
            <div className="introduction-text hide-from-mobile">
                <p className="introduction-header-highlight">INTRODUCTION</p>
                <p className="lg-text">Full Stack Web</p>
                <p className="lg-text">Developer</p>
                <p className="introduction-sm-text">Highly motivated and detail-oriented web developer with a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack.</p>
            </div>
        </div>);
}