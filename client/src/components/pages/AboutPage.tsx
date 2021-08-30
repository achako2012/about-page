import React from "react";
import {Navbar} from "../Navbar"
import {Title, About, Services} from '../About'
import Skills from '../Skills'
import {api} from "../../global-hooks";

export const AboutPage: React.FC = () => {

    return (
        <>
            <Navbar/>
            <Title/>
            <About/>
            <Services/>
            <Skills getSkills={api.skillsService.getSkillsList()}/>
        </>
    )

}

