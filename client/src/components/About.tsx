import React from 'react'
import './app.css'
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {IconContext} from "react-icons";
import {BsGear, GoBrowser, MdDeveloperBoard} from "react-icons/all";

export const Title: React.FC = () => {
    return (
        <section className='title-section'>
            <div className='row'>
                <div className='main'>
                    <div className='title-main'>
                        <h1>hello, I'm Software Development Engineer in Test</h1>
                    </div>
                    <div className='additional-title'>
                        <p>A dedicated team player with great analytical skills, strong attention to detail, and
                            well-developed time management abilities. Knowledgeable, self-driven, and certified
                            Automation
                            Test
                            Engineer skilled at developing new
                            tests and test plans, participating in all facets of project development, and performing
                            risk
                            analysis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const About: React.FC = () => {
    return (
        <section className='about-section'>
            <div className='row'>
                <div className='about'>
                    <div className='about-photo'>
                        <img src={process.env.PUBLIC_URL + '/img/photo.jpg'} alt='myPhotoAbout'/>
                    </div>
                    <div className='about-info'>
                        <h1 className='info-header'>about me22</h1>
                        <p className='info-title'>Automation QA Enegineer</p>
                        <p className='info-article'>I'am <span>Alexander Chako</span> Knowledgeable, self-driven, and certified
                            Automation
                            Test
                            Engineer skilled at developing new
                            tests and test plans, participating in all facets of project development, and performing
                            risk
                            analysis</p>
                        <Button color="primary" size="lg">DOWNLOAD RESUME</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Services: React.FC = () => {
    return (
        <section className='services-section'>
            <div className='row'>
                <div className='services'>
                    <div className='services-title'>
                        <h1>What things I'm doing...</h1>
                    </div>
                    <Row>
                        <Col>
                            <Card body>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                                    <div>
                                        <BsGear/>
                                    </div>
                                </IconContext.Provider>
                                <CardTitle tag="h5">Test automation</CardTitle>
                                <CardText>Huge experience with Selenium Webdriver-based tools (ProtractorJS) and Chrome
                                    DevTools based (Playwright). Good experience with stack around - CI/CD systems,
                                    NodeJS, NPM and many others.</CardText>
                            </Card>
                        </Col>
                        <Col>
                            <Card body>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                                    <div>
                                        <MdDeveloperBoard/>
                                    </div>
                                </IconContext.Provider>
                                <CardTitle tag="h5">Manual testing</CardTitle>
                                <CardText>A lot of experience with manual testing - web-applications, web-sites, APIs.
                                    Writing test cases, determining priority of bugs, using
                                    different test aproaches and many other.</CardText>
                            </Card>
                        </Col>
                        <Col>
                            <Card body>
                                <IconContext.Provider value={{className: 'react-icons'}}>
                                    <div>
                                        <GoBrowser/>
                                    </div>
                                </IconContext.Provider>
                                <CardTitle tag="h5">Web Development</CardTitle>
                                <CardText>Experience with React and Angular tools. Knowledge of SQL DB and MongoDB.
                                    writing api server with ExpressJS</CardText>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}
