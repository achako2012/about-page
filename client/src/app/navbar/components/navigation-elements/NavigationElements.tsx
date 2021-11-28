import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaTelegram } from 'react-icons/fa';
import React, { FC } from 'react';
import './NavigationElements.css';

type RightElementsProps = {
    view: string;
    // eslint-disable-next-line react/require-default-props
    onClickNavigation?: any;
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
            </div>
        </div>
    </div>
);

export default NavigationElements;
