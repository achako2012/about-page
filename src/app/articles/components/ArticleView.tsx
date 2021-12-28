import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from 'context-provider/AuthContext';
import { Article } from 'types';

interface ArticleViewProps {
    article: Article;

    onDeleteClick(_id: string): Promise<void>;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onDeleteClick }) => {
    const auth = useContext(AuthContext);

    const controlArticleButtons = (
        <>
            <Button outline onClick={() => onDeleteClick(article._id)}>
                Delete
            </Button>
            <Link to={`/articles/${article._id}/edit`}>
                <Button outline>Edit</Button>
            </Link>
            <Link to={`/articles/${article._id}`}>
                <Button outline>Read more</Button>
            </Link>
        </>
    );

    return (
        <article id={article._id} className="article-view">
            <div id="content">
                <div className="title">
                    <h2 id="title">{article.title}</h2>
                </div>
                <div className="entry-content">
                    <p id="subTitle">{article.subTitle}</p>
                </div>
                <div className="buttons">{auth.isAuthenticated ? controlArticleButtons : null}</div>
            </div>
            <div id="thumbnail" style={{ backgroundColor: article.color }}>
                <img src={article.thumbnail} alt="articleIcon" />
            </div>
        </article>
    );
};

export default ArticleView;
