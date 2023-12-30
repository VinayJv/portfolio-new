import "./Introduction.css";
import background from "./Ellipse.png";

export function Introduction() {
    return (
        <>
            <div className="introduction-container">
                <div className="introduction-info">
                    <div>
                        <p className="name-text">Vinay</p>
                        <p className="name-text margin-set">Jatav <span className="dot">.</span></p>
                    </div>
                    <div className="bar"></div>
                    <p className="sm-text">LinkedIn | Instagram</p>
                    <p className="sm-text hide-from-mobile">GitHub | Behance</p>
                    <button className="contact-btn">CONTACT ME</button>
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
                    <p className="introduction-sm-text">Highly motivated and detail-oriented web developer with a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack. A rapid learner dedicated to efficiently assimilating new concepts, and apply newfound knowledge to elevate the quality of web development projects. </p>
            </div>
        </>);
}