import React from 'react'
import './app.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {Navbar} from "./components/Navbar";
import {ArticlesListPage} from "./pages/ArticlesListPage";
import {EditArticlePage} from "./pages/EditArticlePage";
import {OneArticlePage} from "./pages/OneArticlePage";

const App: React.FC = () => {

    return (
        <Router>
            <div className='app'>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={AboutPage}/>
                    <Route path='/contact' component={ContactPage}/>
                    <Route exact path='/articles' component={ArticlesListPage}/>
                    <Route exact path='/articles/new' component={EditArticlePage}/>
                    <Route exact path='/articles/:articleId' component={OneArticlePage}/>
                    <Route exact path='/articles/:articleId/edit' component={EditArticlePage}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
