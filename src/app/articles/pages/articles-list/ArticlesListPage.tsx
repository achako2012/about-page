import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import ArticlesService from 'api/services/articles-service';
import { Spinner } from 'app/spinner/Spinner';
import './ArticlesListPage.scss';
import { Article } from 'types';
import { ArticleView } from 'app/articles/components/ArticleView';
import { AuthContext } from 'context-provider/AuthContext';

export const ArticlesListPage = () => {
    const auth = useContext(AuthContext);
    const articlesService = ArticlesService.create();

    const [articlesList, updateArticlesList] = React.useState<Article[]>();

    useEffect(() => {
        const setArticles = async () => {
            const articles = await articlesService.getArticles();
            updateArticlesList(articles);
        };
        setArticles();
    }, []);

    const onDeleteClick = async (_id: string): Promise<void> => {
        await articlesService.deleteArticle(_id);
        if (articlesList) {
            const newArticlesList = articlesList.filter((elem) => elem._id !== _id);
            updateArticlesList(newArticlesList);
        }
    };

    const renderArticles = (arr: Article[]) =>
        arr.map((item: Article) => (
            <ArticleView
                key={item._id}
                article={item}
                onDeleteClick={() => onDeleteClick(item._id)}
            />
        ));

    const articles = articlesList?.length ? renderArticles(articlesList) : <Spinner />;

    const createArticleElement = (
        <Link to="/articles/new">
            <Button color="primary">create new article</Button>
        </Link>
    );

    return (
        <div className="articles-wrapper">
            {articles}
            <div className="new-article-btn">
                {auth.isAuthenticated ? createArticleElement : null}
            </div>
        </div>
    );
};

export default ArticlesListPage;
