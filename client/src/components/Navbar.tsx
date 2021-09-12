import React from 'react'
import '../app.css'
import {Link} from 'react-router-dom';
import {SiGithub, SiLinkedin} from "react-icons/si";
import {FaTelegram} from "react-icons/fa";
import "../styles/Navbar.css"

export const Navbar: React.FC = () => {
    return (
        <header>
            <div className='row'>
                <nav className='about-nav'>
                    <Link to="/">alex</Link>
                    <Link to="/">about</Link>
                    <Link to="/experience">experience</Link>
                    <Link to="/blog">blog</Link>
                    <Link to="/contact">contact</Link>
                    <div className='contacts-links'>
                        <a href="https://github.com/achako2012?tab=repositories">
                            <SiGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/alexander-chako-907624154/">
                            <SiLinkedin/>
                        </a>
                        <a href="https://t.me/AleksandrChako">
                            <FaTelegram/>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}
