import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <a className="github" href="http://github.com/ahmd"><i class="eva eva-github-outline"></i>ahmd</a>
            </nav>
            <h1 className="logo">
                <span className="app-icon"><i class="eva eva-checkmark-circle-outline"></i></span>
                <span className="app-name">TODO APP</span> 
             </h1>
        </header>
    )
}
export default Header;