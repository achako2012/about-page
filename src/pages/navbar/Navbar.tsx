import React, { useContext, useEffect, useState } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { AuthContext } from 'context-provider/AuthContext';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

interface NavbarProps {
    onClickModal(): void;
}

export const Navbar: React.FC<NavbarProps> = ({ onClickModal }) => {
    const auth = useContext(AuthContext);

    const [selected, setSelected] = useState(false);

    const clickOnBurger = () => {
        setSelected(!selected);
    };
    useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : 'unset';
    });

    const loginButtons = (
        <div className="login-buttons">
            <button className="authenticate-button-login" type="button" onClick={onClickModal}>
                alex
            </button>
            <FiLogIn className="authenticate-icon-login" onClick={onClickModal} />
        </div>
    );

    const logoutButtons = (
        <div className="logout-buttons">
            <button
                className="authenticate-button-logout"
                type="button"
                onClick={() => auth.logout()}
            >
                logout
            </button>
            <FiLogOut className="authenticate-icon-logout" onClick={() => auth.logout()} />
        </div>
    );

    return (
        <header>
            <nav>
                <div className="container">
                    <div className="navbar">
                        {auth.isAuthenticated ? logoutButtons : loginButtons}
                        <div className={`menu-wrapper ${selected ? 'active' : null}`}>
                            <ul className="menu">
                                <Link className="menu__item" to="/">
                                    about
                                </Link>
                                <Link className="menu__item" to="/articles">
                                    notes
                                </Link>
                                {/* <Link to="/works" onClick={onClickNavigation}> */}
                                {/*    works */}
                                {/* </Link> */}
                                <Link className="menu__item" to="/contact">
                                    contact
                                </Link>
                            </ul>
                            <ul className="social">
                                <a
                                    className="menu__item"
                                    href="https://github.com/achako2012?tab=repositories"
                                >
                                    <SiGithub />
                                </a>
                                <a
                                    className="menu__item"
                                    href="https://www.linkedin.com/in/alexander-chako-907624154/"
                                >
                                    <SiLinkedin />
                                </a>
                                <a className="menu__item" href="https://t.me/AleksandrChako">
                                    <FaTelegram />
                                </a>
                                <a className="menu__item" href="https://wa.me/380982829279">
                                    <FaWhatsapp />
                                </a>
                            </ul>
                        </div>
                        <div
                            className={`burger ${!selected ? 'disable' : 'enable'}`}
                            onClick={() => {
                                clickOnBurger();
                            }}
                        >
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
