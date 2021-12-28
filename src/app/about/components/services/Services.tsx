import React, { useMemo } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { IconContext } from 'react-icons';
import { BsGear, GoBrowser } from 'react-icons/all';
import './Services.scss';

export const Services: React.FC = () => {
    const reactIconsClass = useMemo(() => ({ className: 'react-icons' }), []);

    return (
        <section className="services-section">
            <div className="row">
                <div className="services">
                    <div className="services-title">
                        <h1>Things I&apos;m doing...</h1>
                    </div>
                    <div className="services-cards-wrapper">
                        <Card body>
                            <IconContext.Provider value={reactIconsClass}>
                                <div>
                                    <BsGear />
                                </div>
                            </IconContext.Provider>
                            <CardTitle tag="h5">Testing</CardTitle>
                            <CardText>
                                Huge experience with different testing frames and libraries. Good
                                experience with stack around - CI/CD systems. Writing test cases,
                                determining priority of bugs, using different test approaches and
                                many other.
                            </CardText>
                        </Card>
                        <Card body>
                            <IconContext.Provider value={reactIconsClass}>
                                <div>
                                    <GoBrowser />
                                </div>
                            </IconContext.Provider>
                            <CardTitle tag="h5">Web Development</CardTitle>
                            <CardText>
                                Experience with React. Knowledge of SQL DB, NodeJS, NPM and many
                                others. Experience with building services with Express and MongoDB
                                tools.
                            </CardText>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
