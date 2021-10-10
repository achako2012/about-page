import React from "react";
import MyEditor from "../components/Editor";
import {convertToRaw, EditorState} from "draft-js";
import {stateToHTML} from "draft-js-export-html";
import ArticlesService from "../api/services/articles-service";

type NewArticlePageProps = {}

type NewArticlePageState = {
    title?: any
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

    handleChange(event: any) {
        console.log(typeof event)
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
                <h1>It's new article page</h1>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                <div className='editor-wrapper'>
                    <section>
                        <MyEditor updateArticles={this.updateArticles} articlesService={this.articlesService}/>
                    </section>
                </div>
            </>
        )
    }


}