import React from "react";
import ArticlesService  from "../api/services/articles-service";
import parse from "html-react-parser";
import {Spinner} from "../components/Spinner";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import "../styles/Articles.css"
import {Article} from "../types";

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

    async onDeleteClick(_id: string) {
        await this.articlesService.deleteArticle(_id)
        const newArticlesList = this.state.articlesList.filter(elem => {
            return elem._id !== _id
        })

        await this.setState({articlesList: newArticlesList})
    }

    renderArticles(arr: Article[]) {
        return arr.map((item: any) => {
            const {_id, title, html} = item
            console.log(html)
            return (
                <article key={_id} id={_id} className='form-control'>
                    <p>{title}</p>
                    {parse(html)}
                    <Button outline onClick={() => this.onDeleteClick(_id)}>Delete</Button>
                    <Link to={`/articles/${_id}`}>
                        Open
                    </Link>
                </article>
            )
        })
    }

    render() {
        const {articlesList} = this.state

        const articles = articlesList.length ? this.renderArticles(articlesList) : <Spinner/>

        return (
            <>
                <h1>Articles!</h1>
                {articles}
                <div className='new-article'>
                    <Link to="/articles/new">
                        <Button color="primary">create new article</Button>
                    </Link>
                </div>
            </>
        )
    }
}

