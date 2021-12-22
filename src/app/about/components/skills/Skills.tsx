import { Progress } from 'reactstrap';
import React from 'react';
import { Skill } from 'api/types';
import './Skills.css';

type SkillsProps = {
    skillsList: Skill[];
};

export const Skills: React.FC<SkillsProps> = ({ skillsList }: SkillsProps) => {
    const getColor = (value: number) => {
        if (value < 4) return 'danger';

        if (value < 7) return 'warning';

        return 'success';
    };

    const renderSkills = (arr: Skill[]) =>
        arr.map((item: Skill) => {
            const { id, ...skills } = item;
            const color = getColor(skills.value);
            return (
                <div key={id} className="skills-item">
                    <div className="text-center">{skills.title}</div>
                    <Progress value={skills.value} max="10" color={color} />
                </div>
            );
        });

    const skills = renderSkills(skillsList);

    return (
        <section className="skills-section">
            <div className="row">
                <div className="skills">
                    <div className="skills-title">
                        <h1>My skills</h1>
                    </div>
                    <div className="skills-container">{skills}</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
