import React from "react";
import ArticlesService from "../api/services/articles-service";
import parse from "html-react-parser";
import {Spinner} from "../components/Spinner";
import {Article} from "../types";

interface ArticleProps {
    match: any
}

interface ArticleState {
    article: Article
}

export class OneArticle extends React.Component<ArticleProps, ArticleState> {

    private articlesService = ArticlesService.create()

    constructor(props: ArticleProps) {
        super(props)
        this.state = {
            article: {
                _id: '',
                title: '',
                article: '',
                html: ''
            }
        }
    }

    async componentDidMount() {
        const {params: {articleId}} = this.props.match;

        const article = await this.articlesService.getArticleById(articleId)

        await this.setState({article})
    }

    renderArticle(article: Article) {
        const {_id, title, html} = article
        return (
            <article key={_id} id={_id} className='form-control'>
                <p>{title}</p>
                {parse(html)}
            </article>
        )
    }

    render() {

        const {article} = this.state

        //TODO find out how to simplify this
        const renderedArticle = typeof article.html == 'string' ? this.renderArticle(article) : <Spinner/>

        return (
            <>
                <h1>Article!</h1>
                {renderedArticle}
            </>
        )
    }

}
