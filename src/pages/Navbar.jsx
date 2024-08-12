import React from "react";
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="nav-brand">README SHOP</Link>
            <div className="nav-profile">
                <FaUserAlt className="profile-logo" />
                <div className="dropdown">
                    <Link to="/editUser" className="dropdown-items"><span>Edit Profile</span></Link>
                    <a href="/logout" className="dropdown-items"><span>Logout</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
