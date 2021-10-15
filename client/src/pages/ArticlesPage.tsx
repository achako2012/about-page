import React from "react";
import ArticlesService from "../api/services/articles-service";
import {Spinner} from "../components/Spinner";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import "../styles/Articles.css"
import {Article} from "../types";
import {ArticleView} from "../components/ArticleView";

type ArticlePageProps = {}

interface ArticlePageState {
    articlesList: Article[]
}

export class ArticlePage extends React.Component<ArticlePageProps, ArticlePageState> {

    private articlesService = ArticlesService.create()

    constructor(props: ArticlePageProps) {
        super(props)
        this.state = {
            articlesList: []
        }
    }

    async componentDidMount() {
        const articlesList = await this.articlesService.getArticles()
        await this.setState({articlesList})
    }

    async onDeleteClick(_id: string): Promise<void> {
        console.log(_id)
        await this.articlesService.deleteArticle(_id)
        const newArticlesList = this.state.articlesList.filter(elem => {
            return elem._id !== _id
        })

        await this.setState({articlesList: newArticlesList})
    }

    renderArticles(arr: Article[]) {
        return arr.map((item: any) => {

            return (
                <ArticleView article={item} onDeleteClick={() => this.onDeleteClick( item._id)}/>
            )
        })
    }

    render() {
        const {articlesList} = this.state

        const articles = articlesList.length ? this.renderArticles(articlesList) : <Spinner/>

        return (
            <>
                {articles}
                <div className='new-article-btn'>
                    <Link to="/articles/new">
                        <Button color="primary">create new article</Button>
                    </Link>
                </div>
            </>
        )
    }
}

