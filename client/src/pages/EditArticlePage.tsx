import React, {useEffect, useState} from "react";
import {MyEditor} from "../components/Editor";
import {convertToRaw, EditorState} from "draft-js";
import {stateToHTML} from "draft-js-export-html";
import ArticlesService from "../api/services/articles-service";
import "../styles/NewArticle.css"
import {ThumbnailPreview} from "../components/ThumbnailPreview";
import {Spinner} from "../components/Spinner";

interface NewArticlePageProps {
    match: any;
}

export const EditArticlePage = (props: NewArticlePageProps) => {

    const articlesService = ArticlesService.create()
    const {params: {articleId}} = props.match;

    const [title, updateTitle] = React.useState<string>('')
    const [subTitle, updateSubTitle] = React.useState<string>('')
    const [thumbnail, updateThumbnail] = React.useState<string>('')
    const [color, updateColor] = React.useState<string>('#000000')
    const [entity, updateEntity] = React.useState<string>('')


    useEffect(() => {
        const setArticle = async () => {
            const {params: {articleId}} = props.match;

            if (articleId) {
                const {title, subTitle, thumbnail, color, entity} = await articlesService.getArticleById(articleId)
                updateTitle(title)
                updateSubTitle(subTitle)
                updateThumbnail(thumbnail)
                updateColor(color)
                updateEntity(entity)
            }
        }

        setArticle();

    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        event.target.id === 'title' ? updateTitle(value) : updateSubTitle(value)
    };

    const onFileChange = async (value: string) => {
        updateThumbnail(value)
    };

    const onColorChange = async (value: string) => {
        updateColor(value)
    };

    const updateArticles = async (editorState: EditorState) => {
        const articleEntity = JSON.stringify(convertToRaw(editorState.getCurrentContent()))

        if (articleId) {
            await articlesService.updateArticle(articleId, title, subTitle, thumbnail, color, articleEntity)

        } else {
            const html = stateToHTML(editorState.getCurrentContent())

            await articlesService.postArticles(title, subTitle, thumbnail, color, articleEntity, html)
        }
    }

    const editor = entity || !articleId ? <MyEditor updateArticles={updateArticles} entity={entity}/> : <Spinner/>

    return (
        <>
            <section className="new-article">
                <h1>It's new article page</h1>
                <div className="new-article-title">
                    <input id='title' className='form-control' type="text" placeholder="Title"
                           value={title}
                           onChange={handleChange}/>
                </div>
                <div className="new-article-sub-title">
                    <input id='sub-title' className='form-control' type="text" placeholder="Sub Title"
                           value={subTitle}
                           onChange={handleChange}/>
                </div>
                <ThumbnailPreview color={color} thumbnail={thumbnail}
                                  onFileChange={onFileChange} onColorChange={onColorChange}/>
                <div className='editor-wrapper'>
                    {editor}
                </div>
            </section>
        </>
    )

}