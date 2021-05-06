import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import LOGO from '../assets/kissylips.png'
import './navbar.css'
import ShoppingCart from '../shoppingCart/shoppingcart'

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="nav-link" to="/"> <img className="loggo" src={LOGO} alt="X"/> </Link>
                 <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <div className="dropdown">
                    <span
                        className="btn dropdown-toggle cartbtn"
                        type="button"
                        id="dropdownMenuLink"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fas fa-shopping-cart"></i>
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <ShoppingCart/>
                    </ul>
                    </div>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


