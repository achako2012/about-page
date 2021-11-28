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

interface NewArticlePageProps {
    match: any;
}

export const EditArticlePage = ({ match }: NewArticlePageProps) => {
    const articlesService = ArticlesService.create();
    const {
        params: { articleId }
    } = match;

    const [title, updateTitle] = React.useState<string>('');
    const [subTitle, updateSubTitle] = React.useState<string>('');
    const [thumbnail, updateThumbnail] = React.useState<string>('');
    const [color, updateColor] = React.useState<string>('#000000');
    const [entity, updateEntity] = React.useState<string>('');

    // TODO I have duplicated code in Editor.tsx
    const [editorState, updateEditorState] = React.useState<EditorState>();

    useEffect(() => {
        const setArticle = async () => {
            if (articleId) {
                const article = await articlesService.getArticleById(articleId);
                updateTitle(article.title);
                updateSubTitle(article.subTitle);
                updateThumbnail(article.thumbnail);
                updateColor(article.color);
                updateEntity(article.entity);
            }
        };

        setArticle();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.id === 'title') {
            updateTitle(value);
            return;
        }
        updateSubTitle(value);
    };

    const onFileChange = async (value: string) => {
        updateThumbnail(value);
    };

    const onColorChange = async (value: string) => {
        updateColor(value);
    };

    const updateArticles = async () => {
        if (!editorState) {
            // Logic to check if all fields are filled up
            logger.info('Fill up the fields');
            return;
        }

        const editorContent = editorState.getCurrentContent();
        const articleEntity = JSON.stringify(convertToRaw(editorContent));
        if (articleId) {
            await articlesService.updateArticle(
                articleId,
                title,
                subTitle,
                thumbnail,
                color,
                articleEntity
            );
        } else {
            const html = stateToHTML(editorContent);
            await articlesService.postArticles(
                title,
                subTitle,
                thumbnail,
                color,
                articleEntity,
                html
            );
        }
    };

    const saveEditorState = async (newEditorState: EditorState) => {
        updateEditorState(newEditorState);
    };

    const editor =
        entity || !articleId ? (
            <MyEditor saveEditorState={saveEditorState} entity={entity} />
        ) : (
            <Spinner />
        );

    return (
        <article className="new-article">
            <div className="new-article-title">
                <Input
                    id="title"
                    className="form-control"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <div className="new-article-sub-title">
                <Input
                    id="sub-title"
                    className="form-control"
                    type="textarea"
                    placeholder="Sub Title"
                    value={subTitle}
                    onChange={handleChange}
                />
            </div>
            <ThumbnailPreview
                color={color}
                thumbnail={thumbnail}
                onFileChange={onFileChange}
                onColorChange={onColorChange}
            />
            <div className="editor-wrapper">{editor}</div>
            <Button id="save-article-btn" color="primary" onClick={updateArticles}>
                save the article
            </Button>
        </article>
    );
};

export default EditArticlePage;
