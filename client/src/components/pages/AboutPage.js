import React, {Component} from "react";
import NavBar from "../nav-bar";
import {Title, About, Skills} from '../about-content'




export default class AboutPage extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Title/>
                <About/>
                <Skills/>
            </>
        )
    }
}
