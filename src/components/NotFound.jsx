
import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

// NotFound component to display a 404 error message when a page is not found
const NotFound = () => {
    return (
        <div className="notfound_container">
            <div className="notfound_content">
                <h1 className="error_code">404</h1>
                <h2 className="error_title">Oops! Page Not Found</h2>
                <p className="error_message">Sorry, we can't find the page you're looking for.</p>
                
                {/* Link to redirect the user back to the home page */}
                <Link to="/" className="home_button">Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
