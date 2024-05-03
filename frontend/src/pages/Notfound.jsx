import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <>
            <div className="container">
                <div className="col-md-12 error-container">
                    <h1 className="error-code">404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <Link to="/" className="btn btn-primary">Home Page</Link>
                </div>
            </div>
        </>
    )
}

export default Notfound;