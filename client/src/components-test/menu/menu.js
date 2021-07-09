import React from "react";
import { FaTelegram } from 'react-icons/fa';
import { SiGithub,SiLinkedin } from 'react-icons/si';


import './menu.css'

const Menu = () => {

    return (
        <aside className='about-menu'>
            <div className='person-wrapper'>
                <div className='person-title'>
                    <h1 id='title'>hello,</h1>
                    <p id='name'>I'm Alex!</p>
                </div>
                <div className='person-position'>
                    <p>Automation QA Engineer</p>
                </div>
            </div>
            <div className='summary-wrapper'>
                <div className='summary-title'>
                    <h1>Some facts about me:</h1>
                </div>
                <ul className='summary-list'>
                    <li>I now live in Kiev</li>
                    <li>I watch a lot of movies</li>
                    <li>I have a beautiful wife</li>
                    <li>I have six budgies</li>
                    <li>I write code</li>
                    <li>I was a day-traider on stocks market</li>
                    <li>I changed my mind and decided that I can be QA Engeneer</li>
                    <li>I was QA Engenieer in SmartTrader Labs</li>
                    <li> Then I was QA Engeneere in Terrasoft</li>
                    <li>Now I am QA Engeneere in Kind Geek</li>
                    <li>I have a more detailed resume here</li>
                </ul>
            </div>
            <div className='contacts-wrapper'>
                <div className='contacts-title'>
                    <h1>Contacts</h1>
                </div>
                <div className='contacts-info'>
                    <div className='phone-container'>
                        <p>phone:</p>
                        <p>+380982829279</p>
                    </div>
                    <div className='email-container'>
                        <p>email:</p>
                        <p>a.chako2012@gmal.com</p>
                    </div>
                </div>
                <div className='contacts-links'>
                    <SiGithub/>
                    <SiLinkedin/>
                    <FaTelegram/>
                </div>
            </div>
        </aside>
    )

}

export default Menu;