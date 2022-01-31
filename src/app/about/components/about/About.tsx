import React from 'react';
import { Button } from 'reactstrap';
import './About.scss';

type AboutProps = {
    name: string;
    position: string;
    article: string;
};

export const About: React.FC<AboutProps> = ({ article }: AboutProps) => (
    <section className="about-section">
        <div className="row">
            <div className="about">
                <div className="about-photo">
                    <img src={`${process.env.PUBLIC_URL}/img/photo.jpg`} alt="myPhotoAbout" />
                </div>
                <div className="about-info">
                    <h1 className="info-header">facts about me</h1>
                    <p className="info-article">{article}</p>
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

export default About;
