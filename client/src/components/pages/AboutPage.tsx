import React from "react";
import {Navbar} from "../Navbar"
import {Title, About, Services} from '../About'
import Skills from '../Skills'
import GetHooks from "../../hooks/getHooks";


    const getHooks = new GetHooks()


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

