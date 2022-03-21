import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

import './Social.scss';

const Social: React.FC = () => (
    <section className="section__social">
        <div className="container">
            <div className="social-wrapper">
                <div className="social-title">
                    <h1>Contact me in social</h1>
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/alexander-chako-907624154/" id="linkedin">
                        <SiLinkedin />
                    </a>
                    <a href="https://t.me/AleksandrChako" id="telegram">
                        <FaTelegram />
                    </a>
                    <a href="https://wa.me/380982829279" id="whatsapp">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Social;
