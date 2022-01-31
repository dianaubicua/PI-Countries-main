import React from "react";
import './navbar.css';
import { FiArrowDownLeft } from "react-icons/fi";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <label className="logo">Adventures in Countries</label>
                <ul className="items">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/activitycountry">Add New Activity</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <span>
                <i className="icono"> <FiArrowDownLeft /></i>
            </span>
        </div>
    );
}

export default Navbar;