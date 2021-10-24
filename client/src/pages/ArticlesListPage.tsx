import React, {useEffect, useState} from "react";
import ArticlesService from "../api/services/articles-service";
import {Spinner} from "./Spinner";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import "../styles/Articles.css"
import {Article} from "../types";
import {ArticleView} from "./ArticleView";

export const ArticlesList = () => {

    const articlesService = ArticlesService.create()

    const [articlesList, updateArticlesList] = React.useState<Article[]>()

    useEffect(() => {
        const setArticles = async () => {
            const articlesList = await articlesService.getArticles()
            updateArticlesList(articlesList)
        }
        setArticles();

    }, [])

    const onDeleteClick = async (_id: string): Promise<void> => {
        await articlesService.deleteArticle(_id)
        if (articlesList) {
            const newArticlesList = articlesList.filter(elem => {
                return elem._id !== _id
            })

            updateArticlesList(newArticlesList)
        }
    }

    const renderArticles = (arr: Article[]) => {
        return arr.map((item: any) => {
            return (
                <ArticleView article={item} onDeleteClick={() => onDeleteClick(item._id)}/>
            )
        })
    }

    const articles = articlesList?.length ? renderArticles(articlesList) : <Spinner/>

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

