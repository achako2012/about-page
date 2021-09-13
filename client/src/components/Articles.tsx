import React, {Component} from "react";
import {Spinner} from "./Spinner";

type ArticlesProps = {
    articlesService: any
}

export default class Articles extends Component<ArticlesProps> {

    state = {
        articlesList: null
    }

    async componentDidMount() {
        const articlesList = await this.props.articlesService.getArticles()
        await this.setState({articlesList})
    }

    //TODO Create types for articles array
    renderArticles(arr: any) {
        return arr.map((item: any) => {
            const {_id, ...articles} = item
            return (
                <div key={_id}>
                    <div className="text-center">{articles.title}</div>
                    <p>{articles.article}</p>
                    <div>{articles.date}</div>
                </div>
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
            <section>
                <article>
                    {items}
                </article>
                <article>
                    {items[0]}
                </article>
            </section>

        )
    }
}