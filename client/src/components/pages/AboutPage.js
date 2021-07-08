import Menu from "../menu";
import Content from "../content";
import React, {Component} from "react";
import NavBar from "../nav-bar";


export default class AboutPage extends Component {
    render() {
        return (
            <>
                <Menu/>
                <NavBar/>
                <Content/>
            </>

        )
    }
}
