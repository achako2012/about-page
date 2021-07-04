import React from "react";
import './right-side.css'
import Skills from "./skills";
import Experience from "./experience";
import config from "../../data/config";
import Education from "./education/education";
import Languages from "./languages/languages";
import NavBar from "./nav-bar";
import AboutMe from "./about-me";

const RightSide = () => {

    return (
        <>
            <div className='app-right'>
                <NavBar/>
                <AboutMe/>
                <Skills getData={config.skillList}
                        renderItem={({skill}) => `${skill}`}/>
                <Experience/>
                <Education {...config.education}/>
                <Languages/>

            </div>
        </>
    )

}

export default RightSide;