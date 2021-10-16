import React from "react";
import {utils} from "../hooks/utils";

interface ThumbnailPreviewProps {
    color: string
    thumbnail: string

    onFileChange(value: any): void;

    onColorChange(value: string): void
}

export const ThumbnailPreview: React.FC<ThumbnailPreviewProps> = props => {
    async function changeFile(event: React.ChangeEvent<HTMLInputElement>) {
        if (typeof props.onFileChange === 'function') {
            const files = event.target.files
            const base64 = files ? await utils.convertBase64File(files[0]) : console.log('something went wrong')
            props.onFileChange(base64);
        }
    }

    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        if (typeof props.onColorChange === 'function') {
            props.onColorChange(event.target.value);
        }
    }

    const style = {
        backgroundColor: props.color,
    };

    return (
        <div className='preview'>
            <input type="file" onChange={changeFile}/>
            <span className="color-picker">
              <input type="color" value={props.color} onChange={changeColor}/>
              <input type="text" value={props.color} onChange={changeColor}/>
            </span>
            <p>Thumbnail preview:</p>
            <div className='thumbnail-preview' style={style}>
                <img src={props.thumbnail} height="50px"/>
            </div>
        </div>
    )
}