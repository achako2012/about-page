import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import ArticlesService from '../../../../api/services/articles-service';
import { Spinner } from '../../../spinner/Spinner';
import { Article } from '../../../../types';
import './OneArticle.css';

interface OneArticleProps {
    match: any;
}

export const OneArticlePage = ({ match }: OneArticleProps) => {
    const articlesService = ArticlesService.create();
    const {
        params: { articleId }
    } = match;

    const [article, updateArticle] = React.useState<Article>();

    useEffect(() => {
        const setArticle = async () => {
            const articleForUpdate = await articlesService.getArticleById(articleId);
            updateArticle(articleForUpdate);
        };

        setArticle();
    }, []);

    const renderTitle = (newArticle: Article) => {
        const { title, thumbnail, color } = newArticle;

        const ArticleTitle = styled.div`
            background-image: linear-gradient(${color}, #fff 120%);
        `;

        return (
            <ArticleTitle className="article-title">
                <div className="thumbnail-icon">
                    <img src={thumbnail} alt="articleIcon" />
                </div>
                <h1>{title}</h1>
            </ArticleTitle>
        );
    };

    const renderContent = (newArticle: Article) => {
        const { html } = newArticle;

        return <div className="article-content">{parse(html)}</div>;
    };

    if (!article?.html) {
        return <Spinner />;
    }

    const articleTitle = renderTitle(article);
    const articleContent = renderContent(article);

    return (
        <article key={article._id} id={article._id} className="single-article">
            {articleTitle}
            {articleContent}
        </article>
    );
};

export default OneArticlePage;
