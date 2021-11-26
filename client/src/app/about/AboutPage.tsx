import React, { useEffect } from 'react';
import { Skills } from './components/skills/Skills';
import SkillsService from '../../api/services/skills-service';
import { Spinner } from '../spinner/Spinner';
import { Skill } from '../../api/types';
import './About.css';
import { Title } from './components/Title';
import { About } from './components/About';
import { Services } from './components/Services';
import './components/skills/Skills.css';

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
