import React from 'react';

interface FooButtonProps {
    label: any;
    className: any;
    onButtonClick: any;
}

export const FooButton: React.FC<FooButtonProps> = ({ label, className, onButtonClick }) => (
    // eslint-disable-next-line react/button-has-type
    <button className={className} onClick={() => onButtonClick()}>
        {label}
    </button>
);

export default FooButton;
