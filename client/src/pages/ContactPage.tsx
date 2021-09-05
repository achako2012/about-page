import React from "react";
import {ContactForm, Social} from "../components/ContactForm";
import {EMAIL_CONFIGURATION} from "../confg";

export const ContactPage: React.FC = () => {


    return (
        <>
            <Social/>
            <ContactForm config={EMAIL_CONFIGURATION}/>
        </>
    )
}