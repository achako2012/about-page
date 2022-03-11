import React from 'react';
import './Title.scss';
import { Profile } from 'api/types';

type TitleProps = {
    aboutProfile: Profile;
};

export const Title: React.FC<TitleProps> = ({ aboutProfile }: TitleProps) => (
    <section className="title-section">
        <div className="container">
            <div className="main">
                <div className="title-main">
                    <h1>hello, I&apos;m {aboutProfile.intro}</h1>
                </div>
                <div className="additional-title">
                    <p>{aboutProfile.title}</p>
                </div>
            </div>
        </div>
    </section>
);

export default Title;
