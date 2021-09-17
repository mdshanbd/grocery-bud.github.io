import React from 'react';
import { Link } from 'react-router-dom';

const NotFount = () => {
    return (
        <div>
            <center>
                <h1>Page Not Found</h1>
                <p>This url does not exist</p>
                <Link to="/"><button>Go To Home Page</button></Link>
            </center>
        </div>
    );
}

export default NotFount;
