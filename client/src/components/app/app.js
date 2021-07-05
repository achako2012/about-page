import React, {Component} from 'react'
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutPage, ExperiencePage} from "../../pages";
import GetHooks from "../../hooks/getHooks";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className='app'>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/experience' component={ExperiencePage}/>
                </div>
            </Router>
        )
    }
}
