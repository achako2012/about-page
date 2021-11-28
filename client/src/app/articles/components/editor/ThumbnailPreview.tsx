import React from 'react';
import { convertBase64File } from '../../../../utils/utils';
import logger from '../../../../logger';

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
        if (typeof onFileChange === 'function') {
            const { files } = event.target;
            const base64 = files
                ? await convertBase64File(files[0])
                : logger.log('something went wrong');
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
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={thumbnail} height="50px" />
            </div>
        </div>
    );
};

export default ThumbnailPreview;
