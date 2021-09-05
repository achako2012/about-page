import React from 'react'
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";

const App:React.FC = () => {

    return (
        <Router>
            <div className='app'>
                <div className='about-container'>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/contact' component={ContactPage}/>
                </div>
            </div>
        </Router>
    )
}

export default App
