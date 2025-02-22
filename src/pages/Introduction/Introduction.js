import "./Introduction.css";
import arrow from "./curved-arrow.png";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export function Introduction() {
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    return (
        <div className="introduction-container">
            <div className="heading-container">
                <h1>Hi,<div className="only-mobile"></div> I'm <div className="only-mobile"></div><span className="name-span">Vinay</span></h1>
                <div className="arrow-container">
                    <img src={arrow} alt="" className="icons"/>
                </div>
                <div className="introduction-text-container">
                    <p> I 'm a frontend developer, Proficient in major foundational web
                        technologies. Eager to apply
                        theoretical knowledge and programming skills
                        to create innovative, user-centric web solutions.
                    </p>
                    <div className="explore-container" onClick={()=>navigate('/portfolio')}>
                        <p id="explore-btn">Explore Portfolio</p>
                        <GoArrowRight size={20} id="right-arrow"/>
                    </div>
                </div>
            </div>
        </div>);
}