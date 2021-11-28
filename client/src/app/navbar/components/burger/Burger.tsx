import React, { useEffect, useState } from 'react';
import NavigationElements from '../navigation-elements/NavigationElements';
import './Burger.css';

export const Burger = () => {
    const [selected, setOpen] = useState(false);

    const navigationElements = <NavigationElements view="view-column" />;

    const clickOnBurger = () => {
        setOpen(!selected);
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
