import React from 'react';
import { convertBase64File } from 'helpers/utils';

interface ThumbnailPreviewProps {
    color: string;
    thumbnail: string;

    onFileChange(value: any): void;

    onColorChange(value: string): void;
}

export const ThumbnailPreview: React.FC<ThumbnailPreviewProps> = ({
    onFileChange,
    onColorChange,
    color,
    thumbnail
}: ThumbnailPreviewProps) => {
    async function changeFile(event: React.ChangeEvent<HTMLInputElement>) {
        const { files } = event.target;
        if (files) {
            const base64 = await convertBase64File(files[0]);
            onFileChange(base64);
        }
    }

    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        if (typeof onColorChange === 'function') {
            onColorChange(event.target.value);
        }
    }

    const style = {
        backgroundColor: color
    };

    return (
        <div className="preview">
            <input type="file" onChange={changeFile} />
            <span className="color-picker">
                <input type="color" value={color} onChange={changeColor} />
                <input type="text" value={color} onChange={changeColor} />
            </span>
            <p>Thumbnail preview:</p>
            <div className="thumbnail-preview" style={style}>
                <img src={thumbnail} height="50px" alt="" />
            </div>
        </div>
    );
};

export default ThumbnailPreview;
