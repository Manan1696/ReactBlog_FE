import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <>
            <div id="navigation">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Bollywood'>Bollywood</Link></li>
                    <li><Link to='/Technology'>Technology</Link></li>
                    <li><Link to='/Hollywood'>Hollywood</Link></li>
                    <li><Link to='/Food'>Food</Link></li>
                    <li><Link to='/Tourism'>Tourism</Link></li>
                </ul>
            </div>
            <hr></hr>
        </>
    )
}

export default Nav;