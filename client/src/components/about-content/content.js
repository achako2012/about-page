import './title.css'
import './about.css'

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
                        <h1 className='about-title'>about me</h1>
                        <p className='about-article'>Knowledgeable, self-driven, and certified
                            Automation
                            Test
                            Engineer skilled at developing new
                            tests and test plans, participating in all facets of project development, and performing
                            risk
                            analysis</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export {Title, About}
