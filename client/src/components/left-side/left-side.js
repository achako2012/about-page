import React from "react";

import './left-side.css'

const LeftSide = () => {

    return (
        <div className='app-left'>
            <div className='person-wrapper'>
                <div className='person-title'>
                    <h1 id='hello'>hello,</h1>
                    <p id='name'>I'm Alexander Chako</p>
                </div>
                <div className='person-position'>
                    <p>I'm AQA Engineer in <span>KindGeek</span></p>
                </div>
                <div className='person-blog'>
                    <p>my blog here!</p>
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
                <div className='contacts-user-info'>
                    <p id='phone'>phone: </p>
                    <p>+380982829279</p>
                    <p id='email'>email: </p>
                    <p>a.chako2012@gmal.com</p>
                </div>
                <div className='contacts-links'>
                    <p id = 'gitHub'>GitHub Icon</p>
                    <p id = 'linkedIn'>Linkedin Icon</p>
                    <p id = 'telegram'>Telegram Icon</p>
                </div>
            </div>
        </div>
    )

}

export default LeftSide;