import { EditorState } from "draft-js";
import React, { FC } from "react";
import { StyleButtons } from "./StyleButtons";

type BlockStyleControlsProps = {
  editorState: EditorState;
  onClick(blockType: string): void;
};

export const BlockStyleControls: FC<BlockStyleControlsProps> = ({
  editorState,
  onClick,
}) => {
  const BLOCK_TYPES = [
    { label: "H1", style: "header-one" },
    { label: "H2", style: "header-two" },
    { label: "H3", style: "header-three" },
    { label: "H4", style: "header-four" },
    { label: "H5", style: "header-five" },
    { label: "H6", style: "header-six" },
    { label: "Blockquote", style: "blockquote" },
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
    { label: "Code Block", style: "code-block" },
  ];

  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="block-style-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButtons
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onClick={onClick}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default BlockStyleControls;
