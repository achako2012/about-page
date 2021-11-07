import React, {useState} from 'react'
import './app.css'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {Navbar} from "./components/Navbar";
import {ArticlesListPage} from "./pages/ArticlesListPage";
import {EditArticlePage} from "./pages/EditArticlePage";
import {OneArticlePage} from "./pages/OneArticlePage";
import {LoginModal} from "./components/LoginModal";

const App: React.FC = () => {

    const [isModalOpen, setIsOpen] = useState(false)

    return (
        <>
            <LoginModal open={ isModalOpen } onClose={ () => setIsOpen(false) }/>
            <Router>
                <div className='app'>
                    <Navbar onClickModal={() => setIsOpen(true)}/>
                    <Switch>
                        <Route exact path="/" component={ AboutPage }/>
                        <Route path='/contact' component={ ContactPage }/>
                        <Route exact path='/articles' component={ ArticlesListPage }/>
                        <Route exact path='/articles/new' component={ EditArticlePage }/>
                        <Route exact path='/articles/:articleId' component={ OneArticlePage }/>
                        <Route exact path='/articles/:articleId/edit' component={ EditArticlePage }/>
                        <Redirect to='/'/>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App
