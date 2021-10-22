import React from "react";
import MyEditor from "../components/Editor";
import {convertToRaw, EditorState} from "draft-js";
import {stateToHTML} from "draft-js-export-html";
import ArticlesService from "../api/services/articles-service";
import "../styles/NewArticle.css"
import {ThumbnailPreview} from "../components/ThumbnailPreview";
import {Spinner} from "../components/Spinner";

type NewArticlePageProps = {
    match: any
}

type NewArticlePageState = {
    title: string,
    subTitle: string,
    thumbnail: any,
    color: string,
    entity: string
};

export class NewArticlePage extends React.Component<NewArticlePageProps, NewArticlePageState> {

    private articlesService = ArticlesService.create()

    constructor(props: NewArticlePageProps) {
        super(props)
        this.state = {
            title: '',
            subTitle: '',
            thumbnail: null,
            color: '#000000',
            entity: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateArticles = this.updateArticles.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
    }

    async componentDidMount() {
        const {params: {articleId}} = this.props.match;
        if (articleId) {
            const article = await this.articlesService.getArticleById(articleId)
            await this.setState({
                title: article.title,
                subTitle: article.subTitle,
                entity: article.article
            })
        }
    };

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        event.target.id === 'title' ? this.setState({title: value}) : this.setState({subTitle: value})
    };

    async onFileChange(value: string) {
        this.setState({thumbnail: value})
    };

    async onColorChange(value: string) {
        this.setState({color: value})
    };

    async updateArticles(editorState: EditorState) {
        const {params: {articleId}} = this.props.match;
        const {title, subTitle, thumbnail, color} = await this.state

        if (articleId) {
            console.log('if block - update existing article')

            const articleEntity = JSON.stringify(convertToRaw(editorState.getCurrentContent()))

            await this.articlesService.updateArticle(articleId, articleEntity, title, subTitle)
        } else {
            console.log('else blog - create new article')

            const articleEntity = convertToRaw(editorState.getCurrentContent())

            const html = stateToHTML(editorState.getCurrentContent())

            await this.articlesService.postArticles(title, subTitle, thumbnail, color, JSON.stringify(articleEntity), html)
        }
    }

    render() {
        const entity = this.state.entity
        const {params: {articleId}} = this.props.match;
        const editor = entity || !articleId ? <MyEditor updateArticles={this.updateArticles} entity={entity}/> :
            <Spinner/>

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
                    <ThumbnailPreview color={this.state.color} thumbnail={this.state.thumbnail}
                                      onFileChange={this.onFileChange} onColorChange={this.onColorChange}/>
                    <div className='editor-wrapper'>
                        {editor}
                    </div>
                </section>
            </>
        )
    }


}