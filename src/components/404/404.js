import "./404.css";

export function NotFound() {
    return (
        <div className="introduction-container error-page">
                <div className="small-circle">
                    <p className="error error-code">404</p>
                    <p className="error error-message">Page Not Found !</p>
                    <a className="go-back-btn" href="https://vinay-jv.netlify.app/">Go Back</a>
                </div>
        </div>)
}