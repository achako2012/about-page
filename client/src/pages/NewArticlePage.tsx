import React from "react";
import MyEditor from "../components/Editor";
import {convertToRaw, EditorState} from "draft-js";
import {stateToHTML} from "draft-js-export-html";
import ArticlesService from "../api/services/articles-service";
import "../styles/NewArticle.css"

type NewArticlePageProps = {}

type NewArticlePageState = {
    title: string
};

export class NewArticlePage extends React.Component<NewArticlePageProps, NewArticlePageState> {

    private articlesService = ArticlesService.create()

    constructor(props: NewArticlePageProps) {
        super(props)
        this.state = {
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateArticles = this.updateArticles.bind(this)
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        this.setState({title: value});
    }


    async updateArticles(editorState: EditorState) {
        const articleEntity = convertToRaw(editorState.getCurrentContent())

        const html = stateToHTML(editorState.getCurrentContent())

        const {title} = await this.state

        await this.articlesService.postArticles(title, JSON.stringify(articleEntity), html)
    }

    render() {
        return (
            <>
                <section className="new-article">
                    <h1>It's new article page</h1>
                    <div className="new-article-title">
                        <input className='form-control' type="text" placeholder="Title" value={this.state.title}
                               onChange={this.handleChange}/>
                    </div>
                    <div className='editor-wrapper'>
                        <MyEditor updateArticles={this.updateArticles} articlesService={this.articlesService}/>
                    </div>
                </section>
            </>
        )
    }


}