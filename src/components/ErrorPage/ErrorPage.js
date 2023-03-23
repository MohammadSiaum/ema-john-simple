import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='error-container'>
            <div className='error-container-wrap'>
                <p>404</p>
                <div className='line'></div>
                <p>Nothing here to see</p>
            </div>
        </div>
    );
};

export default ErrorPage;