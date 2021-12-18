import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

interface FooButtonProps {
    label: any;
    className: any;
    // handleClick: any;
}

export const FooButton: React.FC<FooButtonProps> = ({ label, className }) => (
    // eslint-disable-next-line react/button-has-type
    <button className={className}>{label}</button>
);

export default FooButton;
