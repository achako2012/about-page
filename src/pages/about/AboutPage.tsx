import React, { useEffect } from 'react';
import SkillsService from 'api/services/skills-service';
import ProfileService from 'api/services/profile-service';
import { Skills } from './components/skills/Skills';
import { Spinner } from '../spinner/Spinner';
import { Title } from './components/title/Title';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Profile, Skill } from '../../api/types';

export const AboutPage: React.FC = () => {
    const skillsService = SkillsService.create();
    const profileService = ProfileService.create();

    const [skillsList, updateSkillsList] = React.useState<Skill[]>();
    const [aboutProfile, updateProfile] = React.useState<Profile>();

    useEffect(() => {
        const setSkills = async () => {
            const skills = await skillsService.getSkills();
            updateSkillsList(skills);
        };

        setSkills();

        const setProfile = async () => {
            const profileEntity = await profileService.getProfile();
            console.log(profileEntity[0].article);
            updateProfile(profileEntity[0]);
        };
        setProfile();
    }, []);

    const skills = skillsList ? <Skills skillsList={skillsList} /> : <Spinner />;

    const about = aboutProfile ? (
        <>
            <Title title={aboutProfile.title} intro={aboutProfile.intro} />
            <About article={aboutProfile.article} />
        </>
    ) : (
        <Spinner />
    );

    return (
        <>
            {about}
            <Services />
            {skills}
        </>
    );
};

export default AboutPage;
