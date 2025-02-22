import "./NavBar.css";
import { useNavigate } from "react-router-dom";


export function NavBar() {
    
    const navigate = useNavigate();

    return (
        <nav>
            <ul className="header-ul">
                <p className="logo" onClick={()=>navigate("/")}>VJ<span className="logo-dot">.</span></p>
                <div className="nav-inner-container">
                    <p className="nav-links" onClick={()=>navigate("/")}>
                        Home
                    </p>
                    <p className="nav-links" onClick={()=>navigate('/portfolio')}>
                        Portfolio
                    </p>
                </div>
            </ul>
        </nav>
    )
}