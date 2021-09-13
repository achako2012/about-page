import React from 'react'
import './app.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {Navbar} from "./components/Navbar";
import {ArticlePage} from "./pages/ArticlesPage";

const App:React.FC = () => {

    return (
        <Router>
            <div className='app'>
                <Navbar/>
                    <Route path="/" exact component={AboutPage}/>
                    <Route path='/contact' component={ContactPage}/>
                <Route path='/articles' component={ArticlePage}/>
            </div>
        </Router>
    )
}

export default App
