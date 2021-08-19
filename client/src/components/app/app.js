import React, {Component} from 'react'
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutPage} from "../pages";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className='app'>
                    <div className='about-container'>
                        <Route path='' component={AboutPage}/>
                    </div>
                </div>
            </Router>
        )
    }
}
