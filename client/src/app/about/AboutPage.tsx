import React, { useEffect } from 'react';
import { Skills } from './components/skills/Skills';
import SkillsService from '../../api/services/skills-service';
import { Spinner } from '../spinner/Spinner';
import { Skill } from '../../api/types';
import { Title } from './components/title/Title';
import { About } from './components/about/About';
import { Services } from './components/services/Services';

export const AboutPage: React.FC = () => {
    const skillsService = SkillsService.create();

    const [skillsList, updateSkillsList] = React.useState<Skill[]>();

    useEffect(() => {
        const setSkills = async () => {
            const skills = await skillsService.getSkills();
            updateSkillsList(skills);
        };

        setSkills();
    }, []);

    const skills = skillsList ? <Skills skillsList={skillsList} /> : <Spinner />;

    return (
        <>
            <Title />
            <About />
            <Services />
            {skills}
        </>
    );
};

export default AboutPage;
