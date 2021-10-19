import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
                <div className="container my-3 py-3">
                <h1 className="text-danger notfound-text">404</h1>
                <h2 className="text-danger notfound-text">Cannot found</h2>
            </div>
        </div>
    );
};

export default NotFound;