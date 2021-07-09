import React, {Component} from 'react'
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutPage, BlogPage, ExperiencePage} from "../pages";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className='app'>
                    <div className='about-container'>
                        <Route path='/about' component={AboutPage}/>
                    </div>
                    <Route path='/experience' component={ExperiencePage}/>
                    <Route path='/blog' component={BlogPage}/>
                </div>
            </Router>
        )
    }
}
