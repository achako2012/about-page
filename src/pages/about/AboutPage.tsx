import React, { useEffect } from 'react';
import ProfileService from 'api/services/profile-service';
import { Experience, Profile, Skill } from 'api/types';
import { Skills } from './components/skills/Skills';
import { Spinner } from '../spinner/Spinner';
import { Title } from './components/title/Title';
import { About } from './components/about/About';
import { Services } from './components/services/Services';

export const AboutPage: React.FC = () => {
    const profileService = ProfileService.create();

    const [aboutProfile, setProfile] = React.useState<Profile>();
    const [skillsList, setSkillsList] = React.useState<Skill[]>();
    const [experience, setExperience] = React.useState<Experience[]>();

    useEffect(() => {
        const setUpEntities = async () => {
            const profileEntity = await profileService.getProfile();
            const skillsEntity = await profileService.getSkills();
            const experienceEntity = await profileService.getExperience();

            setProfile(profileEntity[0]);
            setSkillsList(skillsEntity);
            setExperience(experienceEntity);
        };

        setUpEntities();
    }, []);

    const skills = skillsList ? <Skills skillsList={skillsList} /> : <Spinner />;

    const about = aboutProfile ? (
        <>
            <Title aboutProfile={aboutProfile} />
            <About aboutProfile={aboutProfile} />
        </>
    ) : (
        <Spinner />
    );

    const experienceCards = experience ? <Services experience={experience} /> : <Spinner />;

    return (
        <>
            {about}
            {experienceCards}
            {skills}
        </>
    );
};

export default AboutPage;
