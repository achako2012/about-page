import React, { ReactNode, useEffect } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Button, Input, Progress } from 'reactstrap';
import { stateToHTML } from 'draft-js-export-html';
import { MyEditor } from '../../components/editor/Editor';
import ArticlesService from '../../../../api/services/articles-service';
import './NewArticle.css';
import './ThumbnailPreview.css';
import { ThumbnailPreview } from '../../components/editor/ThumbnailPreview';
import { Spinner } from '../../../spinner/Spinner';
import logger from '../../../../logger';
import { Article } from '../../../../types';
// eslint-disable-next-line import/no-named-as-default
import FooButton from '../../../notifications/toast/FooButton';
// eslint-disable-next-line import/no-named-as-default
import Toast from '../../../notifications/toast/Toast';

interface NewArticlePageProps {
    match: any;
}

const BUTTON_PROPS = [
    {
        id: 1,
        type: 'success',
        className: 'success',
        label: 'Success'
    },
    {
        id: 2,
        type: 'danger',
        className: 'danger',
        label: 'Danger'
    },
    {
        id: 3,
        type: 'info',
        className: 'info',
        label: 'Info'
    },
    {
        id: 4,
        type: 'warning',
        className: 'warning',
        label: 'Warning'
    }
];

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

    // const [position] = React.useState('Select Position');
    // const [list, setList] = React.useState([]);
    // const [checkValue, setCheckValue] = React.useState(false);
    // const [autoDeleteTime, setAutoDeleteTime] = React.useState(0);

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

    // const showToast = (type: string) => {
    //     const id = Math.floor(Math.random() * 101 + 1);
    //
    //     switch (type) {
    //         case 'success':
    //             toastProperties = {
    //                 id,
    //                 title: 'Success',
    //                 description: 'This is a success toast component',
    //                 backgroundColor: '#5cb85c'
    //             };
    //             break;
    //         case 'danger':
    //             toastProperties = {
    //                 id,
    //                 title: 'Danger',
    //                 description: 'This is a error toast component',
    //                 backgroundColor: '#d9534f'
    //             };
    //             break;
    //         case 'info':
    //             toastProperties = {
    //                 id,
    //                 title: 'Info',
    //                 description: 'This is an info toast component',
    //                 backgroundColor: '#5bc0de'
    //             };
    //             break;
    //         case 'warning':
    //             toastProperties = {
    //                 id,
    //                 title: 'Warning',
    //                 description: 'This is a warning toast component',
    //                 backgroundColor: '#f0ad4e'
    //             };
    //             break;
    //
    //         default:
    //             setList([]);
    //     }
    //
    //     // @ts-ignore
    //     setList([...list, toastProperties]);
    // };

    const renderToastButtons = (arr: any) =>
        arr.map((item: any) => (
            <FooButton key={item.id} className={item.className} label={item.label} />
        ));

    const toastButtons = renderToastButtons(BUTTON_PROPS);

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

            <div>{toastButtons}</div>

            {/* <Toast */}
            {/*    toastList={list} */}
            {/*    position={position} */}
            {/*    autoDelete={checkValue} */}
            {/*    // @ts-ignore */}
            {/*    autoDeleteTime={autoDeleteTime} */}
            {/* /> */}
        </article>
    );
};

export default EditArticlePage;
