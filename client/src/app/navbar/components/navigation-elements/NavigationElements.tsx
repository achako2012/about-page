import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import React, { FC } from "react";
import "./NavigationElements.css"

type RightElementsProps = {
  view: string;
}

const NavigationElements: FC<RightElementsProps> = ({ view }) => (
  <div className='nav-right-elements-wrapper'>
    <div className={view}>
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
    </div>
  </div>

  );

export default NavigationElements;
