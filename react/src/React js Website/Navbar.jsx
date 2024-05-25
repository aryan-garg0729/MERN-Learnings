import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './style.css'
const Navbar = () => {
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light bg-white" >
                        <div className="container-fluid menu">
                            <Link className="navbar-brand" to="/">AG</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/service">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
}
export default Navbar;