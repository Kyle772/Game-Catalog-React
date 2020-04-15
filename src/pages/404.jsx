import React from 'react';
import '../components/404/404.scss'
import logoicon from '../assets/logoicon.png';

const NotFound = () => {
    return (
        <div className="missing container">
            <h1>404!</h1>
            <img src={logoicon}/>
            <h2>Page not found</h2>
        </div>
    );
};

export default NotFound;