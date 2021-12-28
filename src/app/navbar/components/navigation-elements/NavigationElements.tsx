import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import React, { FC } from 'react';
import './NavigationElements.scss';

type RightElementsProps = {
    view: string;
    onClickNavigation?(): void;
};

const NavigationElements: FC<RightElementsProps> = ({ view, onClickNavigation }) => (
    <div className="nav-right-elements-wrapper">
        <div className={view}>
            <Link to="/" onClick={onClickNavigation}>
                about
            </Link>
            <Link to="/articles" onClick={onClickNavigation}>
                articles
            </Link>
            <Link to="/contact" onClick={onClickNavigation}>
                contact
            </Link>
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
                <a href="https://wa.me/380982829279">
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    </div>
);

export default NavigationElements;
