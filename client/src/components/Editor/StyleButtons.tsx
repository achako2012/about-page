import React, {FC} from "react";
import {Button} from "reactstrap";

type StyleButtonProps = {
    active: boolean;
    onClick(style: string): void;
    label: string;
    style: string;
};

export const StyleButtons: FC<StyleButtonProps> = ({onClick, active, label, style}) => {
    let color="secondary"
    if (active) {
        color= 'primary';
    }

    return (
        <Button
            outline
            color={color}
            onMouseDown={ (e) => {
                e.preventDefault();
                onClick(style);
            } }
        >
            { label }
        </Button>
    );
};

export default StyleButtons;
