import React, {useEffect} from "react";
import ArticlesService from "../api/services/articles-service";
import parse from "html-react-parser";
import {Spinner} from "./Spinner";
import {Article} from "../types";
import "../styles/OneArticle.css"
import styled from "@emotion/styled";

interface OneArticleProps {
    match: any
}

export const OneArticle = (props: OneArticleProps) => {

    const articlesService = ArticlesService.create()
    const {params: {articleId}} = props.match;

    const [article, updateArticle] = React.useState<Article>()

    useEffect(() => {
        const setArticle = async () => {
            const article = await articlesService.getArticleById(articleId)
            updateArticle(article);
        }

        setArticle();

    }, [])

    const renderTitle = (article: Article) => {
        const {title, thumbnail, color} = article

        const ArticleTitle = styled.div`
          background-image: linear-gradient(${color}, #fff 120%);
        `

        return (
            <ArticleTitle className="article-title">
                <div className="thumbnail-icon">
                    <img src={thumbnail} alt='articleIcon'/>
                </div>
                <h1>{title}</h1>
            </ArticleTitle>
        )
    }

    const renderContent = (article: Article) => {
        const {html} = article

        return (
            <div className="article-content">
                {parse(html)}
            </div>
        )
    }

    if (!article?.html) {
        return <Spinner/>
    }

    const articleTitle = renderTitle(article)
    const articleContent = renderContent(article)

    return (
        <>
            <article key={article._id} id={article._id} className='single-article'>
                {articleTitle}
                {articleContent}
            </article>

        </>
    )
}