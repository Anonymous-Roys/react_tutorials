// Navbar.js
import React from "react";
import style from "./Compstyle.module.css"; // Import the CSS file

function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.logo}>Your Logo</div>
            <ul className={style.li}>
                <li className={style.li}>
                    <a href="./"  className={style.a}>Home</a>
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