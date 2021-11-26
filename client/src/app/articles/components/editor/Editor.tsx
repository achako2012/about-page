import React, { useEffect } from 'react';
import { convertFromRaw, Editor, EditorState, RichUtils } from 'draft-js';
import { BlockStyleControls } from './BlockStyleControls';
import { InlineStyleControls } from './InlineStyleControls';
import './Editor.css';

type EditorProps = {
    saveEditorState(editorState: EditorState): void;
    entity: string;
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

export const MyEditor = ({ entity, saveEditorState }: EditorProps) => {
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

    const onInlineStyleClick = (inlineType: string) => {
        const newState = RichUtils.toggleInlineStyle(editorState, inlineType);
        updateEditorState(newState);
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
