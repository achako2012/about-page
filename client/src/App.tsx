import React from 'react'
import './app.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {Navbar} from "./components/Navbar";
import {ArticlePage} from "./pages/ArticlesPage";
import {NewArticlePage} from "./pages/NewArticlePage";
import {OneArticle} from "./pages/OneArticle";

const App: React.FC = () => {

    return (
        <Router>
            <div className='app'>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={AboutPage}/>
                    <Route path='/contact' component={ContactPage}/>
                    <Route exact path='/articles' component={ArticlePage}/>
                    <Route exact path='/articles/new' component={NewArticlePage}/>
                    <Route exact path='/articles/:articleId' component={OneArticle}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
