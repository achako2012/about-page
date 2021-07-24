import './title.css'
import './about.css'
import './skills.css'

const Title = () => {
    return (
        <section className='title-section'>
            <div className='row'>
                <div className='main'>
                    <div className='title-main'>
                        <h1>hello, I'm Automation QA Engineer</h1>
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
                        <h1 className='info-header'>about me</h1>
                        <p className='info-title'>I'am AQA Enegineer in <span>Kind Geek</span></p>
                        <p className='info-article'>Knowledgeable, self-driven, and certified
                            Automation
                            Test
                            Engineer skilled at developing new
                            tests and test plans, participating in all facets of project development, and performing
                            risk
                            analysis</p>
                        <button>DOWNLOAD RESUME</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Skills = () => {
    return (
        <section className='skills-section'>
            <div className='row'>
                <div className='skills-title'>
                    <h1>What things I'm doing...</h1>
                </div>
                <div className='skills'>
                    <div className='Test Automation'>
                        <h2>Test automation</h2>
                        <ul className='ul'>
                            <li>TypeScript</li>
                            <li>Selenium Webdriver-based tools (ProtractorJS, WebdriverIO, Selenide)</li>
                            <li>Chrome DevTools based (Puppeteer, Playwright).</li>
                            <li>CI/CD systems</li>
                            <li>Drinking a lot of coffee</li>
                        </ul>
                    </div>
                    <div className='Manual Testing'>
                        <h2>Web Development</h2>
                        <ul className='ul'>
                            <li>Creating test approaches</li>
                            <li>Proficient with test matrix</li>
                            <li>web, api, backend</li>
                            <li>writing checklists</li>
                        </ul>
                    </div>
                    <div className='Web Development'>
                        <h2>Web Development</h2>
                        <ul className='ul'>
                            <li>React</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>NodeJS, NPM and many others</li>
                            <li>Swearing at my computer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Title, About, Skills}
