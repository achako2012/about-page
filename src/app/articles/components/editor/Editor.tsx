import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { BlockStyleControls } from './BlockStyleControls';
import { InlineStyleControls } from './InlineStyleControls';
import './Editor.css';

type EditorProps = {
    saveEditorState(editorState: EditorState): void;
    editorState: EditorState;
};

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        borderRadius: 4,
        color: 'rgb(224,30,90)',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
    }
};

export const MyEditor = ({ editorState, saveEditorState }: EditorProps) => {
    const onChange = (newEditorState: EditorState) => {
        saveEditorState(newEditorState);
    };

    const onBlockStyleClick = (blockType: string) => {
        const newState = RichUtils.toggleBlockType(editorState, blockType);
        saveEditorState(newState);
    };

    const onInlineStyleClick = (inlineType: string) => {
        const newState = RichUtils.toggleInlineStyle(editorState, inlineType);
        saveEditorState(newState);
    };

    return (
        <div className="form-control" id="rich-editor">
            <div className="editor-operations">
                <BlockStyleControls editorState={editorState} onClick={onBlockStyleClick} />
                <InlineStyleControls editorState={editorState} onClick={onInlineStyleClick} />
            </div>
            <Editor editorState={editorState} onChange={onChange} customStyleMap={styleMap} />
        </div>
    );
};

export default MyEditor;
