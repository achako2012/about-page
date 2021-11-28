import React, { useEffect, useState } from 'react';
import NavigationElements from '../navigation-elements/NavigationElements';
import './Burger.css';

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
                <div />
                <div />
                <div />
            </div>
            {selected ? navigationElements : null}
        </>
    );
};

export default Burger;
