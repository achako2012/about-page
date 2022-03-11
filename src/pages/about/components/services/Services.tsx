import React, { useMemo } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { IconContext } from 'react-icons';
import { BsGear, GoBrowser } from 'react-icons/all';
import './Services.scss';
import { Experience } from 'api/types';

type ServicesProps = {
    experience: Experience[];
};

export const Services: React.FC<ServicesProps> = ({ experience }: ServicesProps) => {
    const reactIconsClass = useMemo(() => ({ className: 'react-icons' }), []);
    const icons = [<BsGear />, <GoBrowser />];

    const renderExperienceCards = (arr: Experience[]) =>
        arr.map((elem, index) => (
            <Card body key={elem.id}>
                <IconContext.Provider value={reactIconsClass}>
                    <div>{icons[index]}</div>
                </IconContext.Provider>
                <CardTitle tag="h5">{elem.title}</CardTitle>
                <CardText>{elem.article}</CardText>
            </Card>
        ));

    return (
        <section className="services-section">
            <div className="container">
                <div className="services">
                    <div className="services-title">
                        <h1>Things I&apos;m doing...</h1>
                    </div>
                    <div className="services-cards-wrapper">
                        {renderExperienceCards(experience)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
