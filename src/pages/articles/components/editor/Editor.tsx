import React from 'react';
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import './Editor.scss';
import Editor from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import { convertBase64File } from 'helpers/utils';
import { BlockStyleControls } from './BlockStyleControls';
import { InlineStyleControls } from './InlineStyleControls';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];

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

    const insertImage = (eS: any, base64: any) => {
        const contentState = eS.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', {
            src: base64
        });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(eS, {
            currentContent: contentStateWithEntity
        });
        return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
    };

    const handleClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (files) {
            const base64 = await convertBase64File(files[0]);
            const newEditorState = insertImage(editorState, base64);
            onChange(newEditorState);
        }
    };

    return (
        <div className="form-control" id="rich-editor">
            <div className="editor-operations">
                <BlockStyleControls editorState={editorState} onClick={onBlockStyleClick} />
                <InlineStyleControls editorState={editorState} onClick={onInlineStyleClick} />
            </div>
            <Editor
                editorState={editorState}
                onChange={onChange}
                plugins={plugins}
                customStyleMap={styleMap}
            />
            {/* eslint-disable-next-line react/button-has-type */}
            <input type="file" onChange={handleClick} />
        </div>
    );
};

export default MyEditor;
