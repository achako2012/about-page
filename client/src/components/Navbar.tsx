import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaTelegram } from 'react-icons/fa';
import '../styles/Navbar.css';
import { AuthContext } from '../context/AuthContext';

interface NavbarProps {
    onClickModal: any;
}

export const Navbar: React.FC<NavbarProps> = ({ onClickModal }) => {
    const auth = useContext(AuthContext);

    return (
        <header>
            <div className="row">
                <nav className="about-nav">
                    {auth.isAuthenticated ? (
                        // TODO fix this
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                        <a onClick={() => auth.logout()}>logout</a>
                    ) : (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                        <a onClick={onClickModal}>alex</a>
                    )}
                    <Link to="/">about</Link>
                    <Link to="/articles">articles</Link>
                    <Link to="/contact">contact</Link>
                    <div className="contacts-links">
                        <a href="https://github.com/achako2012?tab=repositories">
                            <SiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/alexander-chako-907624154/">
                            <SiLinkedin />
                        </a>
                        <a href="https://t.me/AleksandrChako">
                            <FaTelegram />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
