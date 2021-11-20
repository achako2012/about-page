import React, { useEffect} from 'react';
import {convertFromRaw, Editor, EditorState, RichUtils} from 'draft-js';
import {BlockStyleControls} from "./BlockStyleControls";
import {InlineStyleControls} from "./InlineStyleControls";
import '../../styles/Editor.css';

type EditorProps = {
    saveEditorState(editorState: EditorState): void;
    entity?: string;
};

export const MyEditor = ({entity, saveEditorState}: EditorProps) => {
    const [editorState, updateEditorState] = React.useState<EditorState>(EditorState.createEmpty());

    useEffect(() => {
        const setEditorState = () => {
            if (entity) {
                const state = EditorState.createWithContent(convertFromRaw(JSON.parse(entity)));
                updateEditorState(state);
            }
        };
        setEditorState();
    }, [entity]);

    const onChange = (newEditorState: EditorState) => {
        updateEditorState(newEditorState);
        saveEditorState(newEditorState);
    };

    const onBlockStyleClick = (blockType: string) => {
        const newState = RichUtils.toggleBlockType(editorState, blockType);
        updateEditorState(newState);
    };

    const onInlineStyleClick = (inlineType:string)=>{
        const newState = RichUtils.toggleInlineStyle(editorState, inlineType)
        updateEditorState(newState);
    }

    return (
        <div className="form-control">
            <div className="editor-operations">
                <BlockStyleControls editorState={ editorState } onClick={ onBlockStyleClick }/>
                <InlineStyleControls editorState={ editorState } onClick={ onInlineStyleClick }/>
            </div>
            <Editor editorState={ editorState } onChange={ onChange }/>
        </div>
    );
};

export default MyEditor;
