import React from "react";
import ArticlesService, {getArticlesResponse} from "../api/services/articles-service";
import MyEditor from "../components/Editor";
import parse from "html-react-parser";
import {Spinner} from "../components/Spinner";

type ArticlePageProps = {}

interface ArticlePageState {
    articlesList: getArticlesResponse[]
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

    renderArticles(arr: getArticlesResponse[]) {
        return arr.map((item: any) => {
            const {_id, title, html} = item
            return (
                <article key={_id}>
                    <button onClick={() => this.onDeleteClick(_id)}>Delete</button>
                    <p>{title}</p>
                    {parse(html)}
                </article>
            )
        })
    }

    render() {
        const {articlesList} = this.state

        const articles = articlesList.length ? this.renderArticles(articlesList) : <Spinner/>

        return (
            <>
                <div className='articles-wrapper'>
                    <h1>Articles!</h1>
                    {articles}
                </div>
                <div className='editor-wrapper'>
                    <section>
                        <MyEditor articlesService={this.articlesService}/>
                    </section>
                </div>
            </>
        )
    }
}

