import React, { useMemo } from 'react';
import './index.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AboutPage } from './pages/about/AboutPage';
import { ContactPage } from './pages/contact/ContactPage';
import { Navbar } from './pages/navbar/Navbar';
import { ArticlesListPage } from './pages/articles/pages/articles-list/ArticlesListPage';
import { EditArticlePage } from './pages/articles/pages/edit-article/EditArticlePage';
import { OneArticlePage } from './pages/articles/pages/one-article/OneArticlePage';
import { LoginModal } from './pages/auth/LoginModal';
import { useAuth } from './hooks/auth.hooks';
import { AuthContext } from './context-provider/AuthContext';
import { WorksPage } from './pages/works/WorksPage';

const App: React.FC = () => {
    const { token, login, logout } = useAuth();

    const isAuthenticated = !!token;

    const [isModalOpen, setIsOpen] = React.useState<boolean>(false);

    const auth = useMemo(
        () => ({ isAuthenticated, login, logout }),
        [isAuthenticated, login, logout]
    );

    return (
        <AuthContext.Provider value={auth}>
            <LoginModal isModalOpen={isModalOpen} onClose={() => setIsOpen(false)} />
            <Router>
                <div className="app">
                    <Navbar onClickModal={() => setIsOpen(true)} />
                    <Switch>
                        <Route exact path="/" component={AboutPage} />
                        <Route exact path="/works" component={WorksPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route exact path="/articles" component={ArticlesListPage} />
                        <Route exact path="/articles/new" component={EditArticlePage} />
                        <Route exact path="/articles/:articleId" component={OneArticlePage} />
                        <Route exact path="/articles/:articleId/edit" component={EditArticlePage} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
