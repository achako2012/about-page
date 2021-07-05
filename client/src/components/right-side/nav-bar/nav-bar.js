import React from "react";
import './nav-bar.css'
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <header>
          <nav className='app-nav'>
              <Link to="/about">About</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/blog">Blog</Link>
          </nav>
        </header>
    )

}

export default NavBar;