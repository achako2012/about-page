import React from "react";
import MyEditor from "../components/Editor";
import {convertToRaw, EditorState} from "draft-js";
import {stateToHTML} from "draft-js-export-html";
import ArticlesService from "../api/services/articles-service";
import "../styles/NewArticle.css"
import {appendFile} from "fs";
import {log} from "util";

type NewArticlePageProps = {}

type NewArticlePageState = {
    title: string,
    subTitle: string,
    selectedFile?: any
};

export class NewArticlePage extends React.Component<NewArticlePageProps, NewArticlePageState> {

    private articlesService = ArticlesService.create()

    constructor(props: NewArticlePageProps) {
        super(props)
        this.state = {
            title: '',
            subTitle: '',
            selectedFile: null
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

        // @ts-ignore
        this.setState({selectedFile: event.target.files[0],})

        // if (event.target.files) {
        //     const file = await event.target.files[0]
        //     this.setState({
        //         selectedFile: file
        //     })
        //
        //     console.log('file uploaded')
        // } else {
        //     console.log("file wasn't uploaded")
        // }
    };


    async updateArticles(editorState: EditorState) {
        const articleEntity = convertToRaw(editorState.getCurrentContent())

        const html = stateToHTML(editorState.getCurrentContent())

        const formData = new FormData()

        const {title, subTitle, selectedFile} = await this.state

        formData.append('image', selectedFile)
        console.log(selectedFile)


        await this.articlesService.postArticles(title, subTitle, formData, JSON.stringify(articleEntity), html)
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
                    </div>
                    <div className='editor-wrapper'>
                        <MyEditor updateArticles={this.updateArticles} articlesService={this.articlesService}/>
                    </div>
                </section>
            </>
        )
    }


}