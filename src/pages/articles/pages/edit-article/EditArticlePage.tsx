import React, { useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { Button, Input } from 'reactstrap';
import { stateToHTML } from 'draft-js-export-html';
import { MyEditor } from 'pages/articles/components/editor/Editor';
import ArticlesService from 'api/services/articles-service';
import './NewArticle.scss';
import './ThumbnailPreview.scss';
import { ThumbnailPreview } from 'pages/articles/components/editor/ThumbnailPreview';
import { Spinner } from 'pages/spinner/Spinner';
import { Article, ToastPosition, ToastType } from 'types';
import { Toast } from 'pages/notifications/Toast';
import { useNotification } from 'hooks/notification.hooks';

interface NewArticlePageProps {
    match: {
        params: {
            articleId: string;
        };
    };
}

export const EditArticlePage = ({ match }: NewArticlePageProps) => {
    const articlesService = ArticlesService.create();

    const { currentToast, showToast } = useNotification();

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

    const [editorState, updateEditorState] = React.useState<EditorState>(EditorState.createEmpty());

    const [isNotSaved, setIsSaved] = React.useState<boolean>(true);

    useEffect(() => {
        const setArticle = async () => {
            if (articleId) {
                const fetchedArticle = await articlesService.getArticleById(articleId);
                updateArticle({ ...fetchedArticle });
            }
        };

        setArticle();
    }, []);

    useEffect(() => {
        const setEditorState = () => {
            if (article.entity) {
                const state = EditorState.createWithContent(
                    convertFromRaw(JSON.parse(article.entity))
                );
                updateEditorState(state);
            }
        };
        setEditorState();
    }, [article.entity]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const validateArticle = (art: Article, editor: EditorState): boolean => {
        const { title, subTitle, color, thumbnail } = art;
        return (
            !!title &&
            !!subTitle &&
            !!thumbnail &&
            editor.getCurrentContent().hasText() &&
            color !== '#000000'
        );
    };

    const updateArticles = async () => {
        if (!validateArticle(article, editorState)) {
            showToast(ToastType.Warning, 'Fill up all fields');
            return;
        }

        const editorContent = editorState.getCurrentContent();
        const articleEntity = JSON.stringify(convertToRaw(editorContent));
        const articleHtml = stateToHTML(editorContent);

        const newArticle = {
            ...article,
            entity: articleEntity,
            html: articleHtml
        };

        updateArticle(newArticle);
        setIsSaved(!isNotSaved);

        if (articleId) {
            try {
                const articleResponse = await articlesService.updateArticle({ ...newArticle });
                showToast(ToastType.Success, articleResponse.message);
            } catch (e) {
                showToast(ToastType.Error, `Something went wrong`);
            }
        } else {
            try {
                const articleResponse = await articlesService.createArticle({ ...newArticle });
                showToast(ToastType.Success, articleResponse.message);
            } catch (e) {
                showToast(ToastType.Error, `Something went wrong`);
            }
        }
    };

    const saveEditorState = async (newEditorState: EditorState) => {
        updateEditorState(newEditorState);
    };

    const editor =
        article.entity || !articleId ? (
            <MyEditor saveEditorState={saveEditorState} editorState={editorState} />
        ) : (
            <Spinner />
        );

    return (
        <>
            <Prompt
                when={isNotSaved}
                message="You have unsaved changes, are you sure you want to leave?"
            />
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
                {currentToast ? (
                    <Toast
                        position={ToastPosition.BottomMiddle}
                        currentToast={currentToast}
                        autoDelete={2 * 1000}
                    />
                ) : null}
            </article>
        </>
    );
};

export default EditArticlePage;
