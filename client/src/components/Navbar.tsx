import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom';
import {SiGithub, SiLinkedin} from "react-icons/si";
import {FaTelegram} from "react-icons/fa";
import "../styles/Navbar.css"
import {AuthContext} from "../context/AuthContext";

interface NavbarProps {
    onClickModal: any
}

export const Navbar: React.FC<NavbarProps> = ({onClickModal}) => {

    const auth = useContext(AuthContext)

    return (
        <header>
            <div className='row'>
                <nav className='about-nav'>
                    { auth.isAuthenticated ? <a onClick={ () => auth.logout() }>logout</a> :
                        <a onClick={ onClickModal }>alex</a> }
                    <Link to="/">about</Link>
                    <Link to="/articles">articles</Link>
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
