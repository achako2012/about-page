import React, { useMemo, useState } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AboutPage } from "./app/about/AboutPage";
import { ContactPage } from "./app/contact/ContactPage";
import { Navbar } from "./app/navbar/Navbar";
import { ArticlesListPage } from "./app/articles/pages/articles-list/ArticlesListPage";
import { EditArticlePage } from "./app/articles/pages/edit-article/EditArticlePage";
import { OneArticlePage } from "./app/articles/pages/one-article/OneArticlePage";
import { LoginModal } from "./app/auth/LoginModal";
import { useAuth } from "./hooks/auth.hooks";
import { AuthContext } from "./context-provider/AuthContext";

const App: React.FC = () => {
  const { token, login, logout } = useAuth();

  const isAuthenticated = !!token;

  const [isModalOpen, setIsOpen] = useState(false);

  const auth = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  );

  return (
    <AuthContext.Provider value={auth}>
      <LoginModal open={isModalOpen} onClose={() => setIsOpen(false)} />
      <Router>
        <div className="app">
          <Navbar onClickModal={() => setIsOpen(true)} />
          <Switch>
            <Route exact path="/" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/articles" component={ArticlesListPage} />
            <Route exact path="/articles/new" component={EditArticlePage} />
            <Route
              exact
              path="/articles/:articleId"
              component={OneArticlePage}
            />
            <Route
              exact
              path="/articles/:articleId/edit"
              component={EditArticlePage}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
