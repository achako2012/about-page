import React, {Component} from "react";
import {Spinner} from "./Spinner";
import MyEditor from "./Editor";
import parse from 'html-react-parser'

type ArticlesProps = {
    articlesService: any
}

export default class Articles extends Component<ArticlesProps> {

    state = {
        articlesList: null
    }

    async componentDidMount() {
        const articlesList = await this.props.articlesService.getArticles()
        console.log(articlesList)
        await this.setState({articlesList})
    }

    onDeleteClick=async (id:string) =>{
        console.log('delete button')
        console.log(id)
        await this.props.articlesService.deleteArticle(id)
    }

    //TODO Create types for articles array
    renderArticles(arr: any) {
        return arr.map((item: any) => {
            const {_id, ...articles} = item
            return (
                <section>
                    <div key={_id}>
                        <button onClick={()=>this.onDeleteClick(_id)}>delete</button>
                        {parse(articles.html)}
                    </div>
                </section>
            )
        })
    }


    render() {

        const {articlesList} = this.state

        if (!articlesList) {
            return <Spinner/>
        }

        const items = this.renderArticles(articlesList)

        //TODO Create function for list rendering
        return (
            <>
                {items}
                <section>
                    <article>
                        <MyEditor articlesService={this.props.articlesService}/>
                    </article>
                </section>
            </>

        )
    }
}