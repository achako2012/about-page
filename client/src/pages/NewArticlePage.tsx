import React from "react";
import MyEditor from "../components/Editor";
import {convertToRaw, EditorState} from "draft-js";
import {stateToHTML} from "draft-js-export-html";
import ArticlesService from "../api/services/articles-service";
import "../styles/NewArticle.css"
import {utils} from "../hooks/utils";

type NewArticlePageProps = {}

type NewArticlePageState = {
    title: string,
    subTitle: string,
    thumbnail?: any
};

export class NewArticlePage extends React.Component<NewArticlePageProps, NewArticlePageState> {

    private articlesService = ArticlesService.create()

    constructor(props: NewArticlePageProps) {
        super(props)
        this.state = {
            title: '',
            subTitle: '',
            thumbnail: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateArticles = this.updateArticles.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        event.target.id === 'title' ? this.setState({title: value}) : this.setState({subTitle: value})
    }

    async onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const file = event.target.files[0]
            const base64 = await utils.convertBase64File(file)
            this.setState({thumbnail: base64})
        } else{
            console.log('something went wrong')
        }
    };

    async updateArticles(editorState: EditorState) {
        const articleEntity = convertToRaw(editorState.getCurrentContent())

        const html = stateToHTML(editorState.getCurrentContent())

        const {title, subTitle, thumbnail} = await this.state

        await this.articlesService.postArticles(title, subTitle, thumbnail, JSON.stringify(articleEntity), html)
    }

    render() {
        return (
            <>
                <section className="new-article">
                    <h1>It's new article page</h1>
                    <div className="new-article-title">
                        <input id='title' className='form-control' type="text" placeholder="Title"
                               value={this.state.title}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="new-article-sub-title">
                        <input id='sub-title' className='form-control' type="text" placeholder="Sub Title"
                               value={this.state.subTitle}
                               onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="file" onChange={this.onFileChange}/>
                        <img src={this.state.thumbnail} height="50px"/>
                    </div>
                    <div className='editor-wrapper'>
                        <MyEditor updateArticles={this.updateArticles} articlesService={this.articlesService}/>
                    </div>
                </section>
            </>
        )
    }


}