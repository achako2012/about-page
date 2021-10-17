import React from "react";
import ArticlesService from "../api/services/articles-service";
import parse from "html-react-parser";
import {Spinner} from "../components/Spinner";
import {Article} from "../types";
import "../styles/OneArticle.css"
import styled from "@emotion/styled";

interface OneArticleProps {
    match: any
}

interface OneArticleState {
    article: Article
}

export class OneArticle extends React.Component<OneArticleProps, OneArticleState> {

    private articlesService = ArticlesService.create()

    constructor(props: OneArticleProps) {
        super(props);
        this.state = {
            article: {
                _id: '',
                title: '',
                subTitle: '',
                thumbnail: '',
                color: '',
                article: '',
                date: '',
                html: ''
            }
        }
    }

    async componentDidMount() {
        const {params: {articleId}} = this.props.match;

        const article = await this.articlesService.getArticleById(articleId)

        await this.setState({article})
    }

    renderTitle(article: Article) {
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

    renderContent(article: Article) {

        const {html} = article

        return (
            <div className="article-content">
                {parse(html)}
            </div>
        )
    }

    render() {

        if (!this.state.article.html) {
            return <Spinner/>
        }

        const article = this.state.article

        const articleTitle = this.renderTitle(article)
        const articleContent = this.renderContent(article)

        return (
            <>
                <article key={article._id} id={article._id} className='single-article'>
                    {articleTitle}
                    {articleContent}
                </article>

            </>
        )
    }

}
