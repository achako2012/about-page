import React, {useEffect, useState} from "react";
import {Title, About, Services} from '../components/About'
import {Skills} from '../components/Skills'
import SkillsService from "../api/services/skills-service";
import {Spinner} from "../components/Spinner";
import {Skill} from "../api/types";

type AboutPageState = {
    skillsList: Skill[] | null
}

export const AboutPage: React.FC = () => {

    const skillsService = SkillsService.create()

    const [state, updateSkillsList] = React.useState<AboutPageState>({
        skillsList: null
    })

    useEffect(() => {
        const setSkills = async () => {
            const skills = await skillsService.getSkills()
            updateSkillsList({skillsList: skills})
        }

        setSkills();

    }, []);

    const skills = state.skillsList ? <Skills skillsList={state.skillsList}/> : <Spinner/>

    return (
        <>
            <Title/>
            <About/>
            <Services/>
            {skills}
        </>
    )

}

