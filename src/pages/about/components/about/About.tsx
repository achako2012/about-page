import React from 'react';
import { Button } from 'reactstrap';
import './About.scss';
import { Profile } from 'api/types';

type AboutProps = {
    aboutProfile: Profile;
};

export const About: React.FC<AboutProps> = ({ aboutProfile }: AboutProps) => {
    const renderBio = (arr: { year: string; event: string }[]) =>
        arr.map((elem) => (
            <div className="bio-element">
                <span>{elem.year}</span>
                {elem.event}
            </div>
        ));
    const bio = renderBio(aboutProfile.article);

    return (
        <section className="section__about">
            <div className="container">
                <div className="about">
                    <div className="about-photo">
                        <img src={`${process.env.PUBLIC_URL}/img/photo.jpg`} alt="myPhotoAbout" />
                    </div>
                    <div className="about-info">
                        <h1 className="info-header">facts about me</h1>
                        <div className="bio-info">{bio}</div>
                        <h3>I ♥</h3>
                        <p>
                            &#129436;, art, playing guitar, traveling, coding, mechanical keyboards
                        </p>
                        <a href={`${process.env.PUBLIC_URL}/Alexander_Chako_CV.pdf`} download>
                            <Button color="primary" size="lg">
                                DOWNLOAD RESUME
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
