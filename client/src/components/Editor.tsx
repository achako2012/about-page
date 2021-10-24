import React, {useEffect} from 'react'
import {convertFromRaw, Editor, EditorState, RichUtils} from 'draft-js'
import {Button} from "reactstrap";
import {Article} from "../types";

type Props = {
    updateArticles(editorState: EditorState): void
    entity?: string
}

export const MyEditor = (props: Props) => {

    const [editorState, updateEditorState] = React.useState<EditorState>(EditorState.createEmpty())

    useEffect(() => {
        const setEditorState = () => {
            if (props.entity) {
                const state = EditorState.createWithContent(convertFromRaw(JSON.parse(props.entity)))
                updateEditorState(state)
            }
        }
        setEditorState();
    }, [props.entity])

    const onChange = (editorState: EditorState) => {
        updateEditorState(editorState)

    }

    const onSaveClick = () => {
        props.updateArticles(editorState)
    }

    const onBoldClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }

    const onCodeClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'CODE'));
    }

    return (
        <>
            <div className="form-control">
                <Button outline color="secondary" onClick={onBoldClick}>Bold</Button>
                <Button outline color="secondary" onClick={onCodeClick}>Code</Button>
                <Editor
                    editorState={editorState}
                    onChange={onChange}/>
            </div>
            <Button id="save-article-btn" color="primary" onClick={onSaveClick}>save the
                article</Button>
        </>
    )
}