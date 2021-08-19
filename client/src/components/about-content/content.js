import React from 'react';
import {Button, Card, CardText, CardTitle, Col, Row} from 'reactstrap';
import './title.css'
import './about.css'
import './services.css'
import {BsGear, GoBrowser, MdDeveloperBoard} from "react-icons/all";
import {IconContext} from "react-icons";

const Title = () => {
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

const About = () => {
    return (
        <section className='about-section'>
            <div className='row'>
                <div className='about'>
                    <div className='about-photo'>
                        <img src={process.env.PUBLIC_URL + '/img/photo.jpg'} alt='myPhotoAbout'/>
                    </div>
                    <div className='about-info'>
                        <h1 className='info-header'>about me11</h1>
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

const Services = () => {
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

// const Skills = () => {
//     return (
//         <section className='skills-section'>
//             <div className='row'>
//                 <div className='skills'>
//                     <div className='skills-title'>
//                         <h1>My skills</h1>
//                     </div>
//                     <div className='skills-container'>
//                         <div className='core-skills'>
//                             <div className='skills-progress'>
//                                 <div className="text-center">JavaScript/TypeScript</div>
//                                 <Progress value="6" max="10" color='warning'/>
//                                 <div className="text-center">Automation Frameworks</div>
//                                 <Progress value="7" max="10" color='warning'/>
//                                 <div className="text-center">Node JS</div>
//                                 <Progress value="4" max="10" color='danger'/>
//                                 <div className="text-center">CI/CD</div>
//                                 <Progress value="3" max="10" color='danger'/>
//                             </div>
//                         </div>
//                         <div className='soft-skills'>
//                             <div className="text-center">Test strategy</div>
//                             <Progress value="7" max="10" color='warning'/>
//                             <div className="text-center">Test documentation</div>
//                             <Progress value="9" max="10" color='success'/>
//                             <div className="text-center">Manual testing</div>
//                             <Progress value="8" max="10" color='success'/>
//                             <div className="text-center">Test performance</div>
//                             <Progress value="6" max="10" color='success'/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

export {Title, About, Services}
