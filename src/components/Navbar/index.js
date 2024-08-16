
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const VerticalNavbar = () => {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-light ">
                <ul className="navbar-nav d-flex flex-column">
                    <li className="nav-item"><a className="nav-link" href="#">Acadamics</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Programme and Curriculum</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Mess Management</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Visitor's Hostel</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Healthcare Center</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Scholarship Portal</a></li>
                </ul>
            </nav>
        </>
    );
};

export default VerticalNavbar;