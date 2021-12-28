import React, { useEffect, useState } from 'react';
import NavigationElements from '../navigation-elements/NavigationElements';
import './Burger.scss';

export const Burger = () => {
    const [selected, setSelected] = useState(false);

    const navigationElements = (
        <NavigationElements view="view-column" onClickNavigation={() => setSelected(false)} />
    );

    const clickOnBurger = () => {
        setSelected(!selected);
    };
    useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : 'unset';
    });

    return (
        <>
            <div
                className={`nav-burger ${selected ? 'disable' : 'enable'}`}
                onClick={() => {
                    clickOnBurger();
                }}
            >
                <div className={selected ? 'transform_left' : ''} />
                <div className={selected ? 'transform_translate' : ''} />
                <div className={selected ? 'transform_right' : ''} />
            </div>
            {selected ? navigationElements : null}
        </>
    );
};

export default Burger;
