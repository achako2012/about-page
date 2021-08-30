import React from "react";
import {Navbar} from "../components/Navbar"
import {Title, About, Services} from '../components/About'
import Skills from '../components/Skills'
import GetHooks from "../hooks/getHooks";
import SkillsService from "../api/services/skills-service";

export const AboutPage: React.FC = () => {

    const getHooks = new GetHooks()

    const skillService = SkillsService.create()

    skillService.getSkills().then(skills => console.log({skills}))

    //getHooks.getSkillList().then(skills => console.log({skills}))

    return (
        <>
            <Navbar/>
            <Title/>
            <About/>
            <Services/>
            <Skills getSkills={getHooks.getSkillList()}/>
        </>
    )

}

