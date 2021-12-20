import React, { useEffect } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Button, Input } from 'reactstrap';
import { stateToHTML } from 'draft-js-export-html';
import { MyEditor } from '../../components/editor/Editor';
import ArticlesService from '../../../../api/services/articles-service';
import './NewArticle.css';
import './ThumbnailPreview.css';
import { ThumbnailPreview } from '../../components/editor/ThumbnailPreview';
import { Spinner } from '../../../spinner/Spinner';
import logger from '../../../../logger';
import { Article, ToastI, ToastPosition, ToastType } from '../../../../types';
import { Toast } from '../../../notifications/toast/Toast';

interface NewArticlePageProps {
    match: any;
}

export const EditArticlePage = ({ match }: NewArticlePageProps) => {
    const articlesService = ArticlesService.create();

    const {
        params: { articleId }
    } = match;

    const [article, updateArticle] = React.useState<Article>({
        _id: '',
        color: '#000000',
        date: '',
        entity: '',
        html: '',
        subTitle: '',
        thumbnail: '',
        title: ''
    });

    const [editorState, updateEditorState] = React.useState<EditorState>();

    const [currentToast, setCurrentToast] = React.useState<ToastI>();

    useEffect(() => {
        const setArticle = async () => {
            if (articleId) {
                const fetchedArticle = await articlesService.getArticleById(articleId);
                updateArticle({ ...fetchedArticle });
            }
        };

        setArticle();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        logger.log(event.target.id);
        updateArticle({
            ...article,
            [event.target.id]: event.target.value
        });
    };

    const onFileChange = async (value: string) => {
        updateArticle({
            ...article,
            thumbnail: value
        });
    };

    const onColorChange = async (value: string) => {
        updateArticle({
            ...article,
            color: value
        });
    };

    const updateArticles = async () => {
        if (!editorState) {
            // Logic to check if all fields are filled up
            logger.info('Fill up the fields');
            return;
        }

        const editorContent = editorState.getCurrentContent();
        const articleEntity = JSON.stringify(convertToRaw(editorContent));
        const articleHtml = stateToHTML(editorContent);

        updateArticle({
            ...article,
            entity: articleEntity,
            html: articleHtml
        });

        if (articleId) {
            await articlesService.updateArticle({ ...article });
        } else {
            await articlesService.postArticles({ ...article });
        }
    };

    const saveEditorState = async (newEditorState: EditorState) => {
        updateEditorState(newEditorState);
    };

    const editor =
        article.entity || !articleId ? (
            <MyEditor saveEditorState={saveEditorState} entity={article.entity} />
        ) : (
            <Spinner />
        );

    const showToast = (type: string, message: string) => {
        const id = Math.floor(Math.random() * 101 + 1);
        const toastProperties = {
            id,
            type,
            message
        };

        setCurrentToast(toastProperties);
    };

    return (
        <article className="new-article">
            <div className="new-article-title">
                <Input
                    id="title"
                    className="form-control"
                    type="text"
                    placeholder="Title"
                    value={article.title}
                    onChange={handleChange}
                />
            </div>
            <div className="new-article-sub-title">
                <Input
                    id="subTitle"
                    className="form-control"
                    type="textarea"
                    placeholder="Sub Title"
                    value={article.subTitle}
                    onChange={handleChange}
                />
            </div>
            <ThumbnailPreview
                color={article.color}
                thumbnail={article.thumbnail}
                onFileChange={onFileChange}
                onColorChange={onColorChange}
            />
            <div className="editor-wrapper">{editor}</div>
            <Button id="save-article-btn" color="primary" onClick={updateArticles}>
                save the article
            </Button>

            <div>
                <button type="button" onClick={() => showToast(ToastType.Success, 'Article saved')}>
                    success
                </button>
                <button
                    type="button"
                    onClick={() => showToast(ToastType.Warning, 'Something went wrong')}
                >
                    warning
                </button>
                <button
                    type="button"
                    onClick={() => showToast(ToastType.Error, "It's an error bro!")}
                >
                    error
                </button>
            </div>
            {currentToast ? (
                <Toast
                    position={ToastPosition.TopRight}
                    currentToast={currentToast}
                    autoDelete={0}
                />
            ) : null}
        </article>
    );
};

export default EditArticlePage;
