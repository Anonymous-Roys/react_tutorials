// Navbar.js
import React from "react";
// import "./Navbar.css"; // Import the CSS file

function Navbar() {
    return (
        <div>
            <div>Your Logo</div>
            <ul>
                <li>
                    <a href="./">Home</a>
                </li>
                <li>
                    <a href="./about">About</a>
                </li>
                <li>
                    <a href="./services">Services</a>
                </li>
                <li>
                    <a href="./contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;