import React from 'react'
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {Navbar} from "./components/Navbar";

const App:React.FC = () => {

    return (
        <Router>
            <div className='app'>
                <Navbar/>
                <div className='about-container'>
                    <Route path='' component={AboutPage}/>
                </div>
                <div className='contact-container'>
                    <Route path='/contact' component={ContactPage}/>
                </div>
            </div>
        </Router>
    )
}

export default App
