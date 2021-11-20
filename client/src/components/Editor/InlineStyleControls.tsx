import React, {FC} from "react";
import {EditorState} from "draft-js";
import {StyleButtons} from "./StyleButtons";

type InlineStyleControlsProps = {
    editorState: EditorState;
    onClick(blockType: string): void;
}

export const InlineStyleControls: FC<InlineStyleControlsProps> = ({editorState, onClick}) => {
    const INLINE_STYLES = [
        {label: 'Bold', style: 'BOLD'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'},
        {label: 'Monospace', style: 'CODE'}
    ];

    const currentStyle = editorState.getCurrentInlineStyle();
    return (
        <div className="inline-style-controls">
            {INLINE_STYLES.map(type => (
                <StyleButtons
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onClick={onClick}
                    style={type.style}
                />
            ))}
        </div>
    );
}

export default InlineStyleControls;
