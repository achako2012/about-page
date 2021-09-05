import React from "react";
import {Navbar} from "../components/Navbar"
import {Title, About, Services} from '../components/About'
import Skills from '../components/Skills'
import SkillsService from "../api/services/skills-service";

export const AboutPage:React.FC = () => {

   const skillsService = SkillsService.create()

    return (
        <>
            <Navbar/>
            <Title/>
            <About/>
            <Services/>
            <Skills skillsService={skillsService}/>
        </>
    )

}

