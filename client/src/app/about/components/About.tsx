import React from 'react';
import { Button } from 'reactstrap';

export const About: React.FC = () => (
    <section className="about-section">
        <div className="row">
            <div className="about">
                <div className="about-photo">
                    <img src={`${process.env.PUBLIC_URL}/img/photo.jpg`} alt="myPhotoAbout" />
                </div>
                <div className="about-info">
                    <h1 className="info-header">about me</h1>
                    <p className="info-title">Automation QA Enegineer</p>
                    <p className="info-article">
                        I&apos;m <span>Alexander Chako</span> Knowledgeable, self-driven, and
                        certified Automation Test Engineer skilled at developing new tests and test
                        plans, participating in all facets of project development, and performing
                        risk analysis
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

export default About;
