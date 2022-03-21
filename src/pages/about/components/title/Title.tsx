import React from 'react';
import './Title.scss';

export const Title: React.FC = () => (
    <section className="section__title">
        <div className="container">
            <div className="title">
                <div className="title-main">
                    <h1>hello, I&apos;m full-stack developer</h1>
                </div>
                <div className="additional-title">
                    <p>
                        I&apos;m a full-stack developer with a passion for building modern and
                        flexible digital services. I can manage all things with planning, designing
                        and building applications, all the way to solving real-life problems with
                        code. When I&apos;m not pushing pixels, you&apos;ll find me cooking,
                        reading, or walking out in the park
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Title;
