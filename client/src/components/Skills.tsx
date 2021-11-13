import { Progress } from 'reactstrap';
import '../app.css';
import React from 'react';
import '../styles/Skills.css';
import { Skill } from '../api/types';

type SkillsProps = {
    skillsList: Skill[];
};

export const Skills: React.FC<SkillsProps> = ({ skillsList }: SkillsProps) => {
    const getColor = (value: any) => {
        if (value > 7 && value < 11) {
            return 'success';
        }
        if (value > 4 && value < 8) {
            return 'warning';
        }
        return 'danger';
    };

    const renderSkills = (arr: any) =>
        arr.map((item: any) => {
            const { _id, ...skills } = item;
            const color = getColor(skills.value);
            return (
                <div key={_id} className="skills-item">
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
