import React, { useEffect } from 'react';
import { Skills } from '../components/Skills';
import SkillsService from '../api/services/skills-service';
import { Spinner } from '../components/Spinner';
import { Skill } from '../api/types';
import '../styles/About.css';
import { Title } from '../components/About/Title';
import { About } from '../components/About/About';
import { Services } from '../components/About/Services';
import '../styles/Skills.css';

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
