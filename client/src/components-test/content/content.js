import React from "react";
import './content.css'

const Content = () => {

    return (
        <>
            <div className='about-contnet'>
                <div className='about-me'>
                    <h1>My goals</h1>
                    <p>Quality assurance engineer with more than 2 years of professional experience in testing web
                        applications
                        using modern technologies.
                    </p>
                    <p>
                        A dedicated team player with great analytical skills, strong attention to detail, and
                        well-developed time management abilities.
                        Knowledgeable, self-driven, and certified Automation Test Engineer skilled at developing new
                        tests and test plans, participating in all facets of project development, and performing risk analysis.
                        Expert in
                        Automation Testing (Selenium WebDriver), BDD Cucumber, API Testing, Protractor Angular Testing,
                        and
                        Manual Testing.
                    </p>
                    <p>
                        Experience in performing clerical and administrative tasks and providing excellent customer
                        support.
                        Offers great analytical skills, strong attention to detail, and well-developed time management
                        abilities.
                    </p>
                </div>
                {/*<Skills getData={config.skillList}*/}
                {/*        renderItem={({skill}) => `${skill}`}/>*/}
                <div className='experience'>
                    <h1>
                        My Experience
                    </h1>
                    <p>
                        Profesional experience as International shipping specialist <span>| 2014 - 2017</span>
                    </p>
                    <p>
                        Experience as day-trayder on USA stock market <span>| 2017 - 2018</span>
                    </p>
                    <p>
                        Profesional experience as manual QA engineer <span>| 2019 - 2020</span>
                    </p>
                    <p>
                        Profesional experience as automation QA engineer <span>| 2020 - present</span>
                    </p>
                    <a>Here more experience!</a>
                </div>
                <div className='education'>
                    <div className='education-list'>
                        <h2 className='education-list-header'>
                            Education
                        </h2>
                        <div className='education-list-group'>
                <span>
                    <h4 className='education-list-item'>
                        Faculty
                    </h4>
                <h5 className='education-list-item'>
                    University
                </h5>
                </span>
                        </div>
                    </div>
                </div>
                <div className='languages'>
                    <div className='languages-list'>
                        <h2 className='languages-list-header'>
                            Languages
                        </h2>
                        <ul className="languages-list-group">
                            <li className="languages-list-item">
                                Russian, Ukraine - native
                            </li>
                            <li className="languages-list-item">
                                English - Upper Intermediate
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;