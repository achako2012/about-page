import React from "react";
import './nav-bar.css'
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
          <nav className='about-nav'>
              <Link to="/about">About</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/blog">Blog</Link>
          </nav>
    )

}

export default NavBar;