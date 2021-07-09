import React from "react";
import './nav-bar.css'
import {Link} from "react-router-dom";
import {SiGithub, SiLinkedin} from "react-icons/si";
import {FaTelegram} from "react-icons/fa";

const NavBar = () => {

    return (
        <header>
            <div className='row'>
                <nav className='about-nav'>
                    <Link to="/home">alex</Link>
                    <Link to="/about">about</Link>
                    <Link to="/experience">experience</Link>
                    <Link to="/blog">blog</Link>
                    <Link to="/blog">contact</Link>
                    <div className='contacts-links'>
                        <SiGithub/>
                        <SiLinkedin/>
                        <FaTelegram/>
                    </div>
                </nav>
            </div>
        </header>
    )

}

export default NavBar;