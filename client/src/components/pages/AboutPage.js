import React, {Component} from "react";
import NavBar from "../nav-bar";
import {Title, About, Services,Skills} from '../about-content'
import GetHooks from "../../hooks/getHooks";

export default class AboutPage extends Component {

    getHooks = new GetHooks()

    render() {
        return (
            <>
                <NavBar/>
                <Title/>
                <About/>
                <Services/>
                <Skills getData={this.getHooks.getSkillList}/>
            </>
        )
    }
}
