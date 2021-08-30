import React from 'react'
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";

const App:React.FC = ()=>{
    return(
        <Router>
            <div className='app'>
                <div className='about-container'>
                    <Route path='' component={AboutPage}/>
                </div>
            </div>
        </Router>
    )
}

export default App
