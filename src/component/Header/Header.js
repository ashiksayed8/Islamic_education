import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            <header className ="main-section">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark px-5">
                    <a className="navbar-brand webName" >Islamic Education</a>
                    <ul className="navbar-nav mr-auto">
                        <NavLink to ="/home">
                            <li className="nav-item">
                                <a className="nav-link">Home</a>
                            </li>
                        </NavLink>
                        <NavLink to ="/about">
                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>
                        </NavLink>
                        <NavLink to ="/service">
                            <li className="nav-item">
                                <a className="nav-link">Service</a>
                            </li>
                        </NavLink>
                        <NavLink to ="/faculty">
                            <li className="nav-item">
                                <a className="nav-link">Faculty</a>
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
    );
};

export default Header;