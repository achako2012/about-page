import React, {Component} from 'react'
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutPage, BlogPage, ExperiencePage} from "../../pages";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className='app'>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/experience' component={ExperiencePage}/>
                    <Route path='/blog' component={BlogPage}/>
                </div>
            </Router>
        )
    }
}
