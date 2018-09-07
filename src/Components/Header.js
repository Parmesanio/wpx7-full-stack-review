import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div>
            <nav>
                <Link to= "/">Home</Link>
                <Link to= "/dashboard">Dashboard</Link>
                <Link to= "/memes">Memes</Link>
            </nav>
        </div>
     );
}
 
export default Header;