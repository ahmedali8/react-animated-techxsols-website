import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-11 col-md-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <NavLink
                            to="/" className="navbar-brand">
                            {/* <strong>TechXSols</strong> */}
                            <img className="logo" src="images/logo.png" alt="logo" />
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        activeClassName="menu_active"
                                        end
                                        className="nav-link active"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/services"
                                        activeClassName="menu_active"
                                        end
                                        className="nav-link active"
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/about-us"
                                        activeClassName="menu_active"
                                        end
                                        className="nav-link active"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/contact-us"
                                        activeClassName="menu_active"
                                        end
                                        className="nav-link active"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
