import React from "react";
import {Navbar} from "../components/Navbar"
import {Title, About, Services} from '../components/About'
import Skills from '../components/Skills'
import GetHooks from "../hooks/getHooks";

export const AboutPage: React.FC = () => {

    const getHooks = new GetHooks()

    getHooks.getSkillList().then(skills => console.log(skills))

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

