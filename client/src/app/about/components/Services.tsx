import React, { useMemo } from 'react';
import { Card, CardText, CardTitle, Col, Row } from 'reactstrap';
import { IconContext } from 'react-icons';
import { BsGear, GoBrowser, MdDeveloperBoard } from 'react-icons/all';

export const Services: React.FC = () => {
    const reactIconsClass = useMemo(() => ({ className: 'react-icons' }), []);

    return (
        <section className="services-section">
            <div className="row">
                <div className="services">
                    <div className="services-title">
                        <h1>What things I&apos;m doing...</h1>
                    </div>
                    <Row>
                        <Col>
                            <Card body>
                                <IconContext.Provider value={reactIconsClass}>
                                    <div>
                                        <BsGear />
                                    </div>
                                </IconContext.Provider>
                                <CardTitle tag="h5">Test automation</CardTitle>
                                <CardText>
                                    Huge experience with Selenium Webdriver-based tools
                                    (ProtractorJS) and Chrome DevTools based (Playwright). Good
                                    experience with stack around - CI/CD systems, NodeJS, NPM and
                                    many others.
                                </CardText>
                            </Card>
                        </Col>
                        <Col>
                            <Card body>
                                <IconContext.Provider value={reactIconsClass}>
                                    <div>
                                        <MdDeveloperBoard />
                                    </div>
                                </IconContext.Provider>
                                <CardTitle tag="h5">Manual testing</CardTitle>
                                <CardText>
                                    A lot of experience with manual testing - web-applications,
                                    web-sites, APIs. Writing test cases, determining priority of
                                    bugs, using different test aproaches and many other.
                                </CardText>
                            </Card>
                        </Col>
                        <Col>
                            <Card body>
                                <IconContext.Provider value={reactIconsClass}>
                                    <div>
                                        <GoBrowser />
                                    </div>
                                </IconContext.Provider>
                                <CardTitle tag="h5">Web Development</CardTitle>
                                <CardText>
                                    Experience with React and Angular tools. Knowledge of SQL DB and
                                    MongoDB. writing api server with ExpressJS
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default Services;
