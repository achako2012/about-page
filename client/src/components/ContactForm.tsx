import React from "react";
import emailjs from 'emailjs-com'
import {Button, Form, Input, Label} from 'reactstrap';
import {SiLinkedin} from "react-icons/si";
import {FaTelegram} from "react-icons/fa";

interface ContactFormProps {
    config: {
        serviceID: string,
        templateID: string,
        userID: string
    }
}

export const Social: React.FC = () => {

    return (
        <section className='social-section'>
            <div className='row'>
                <div className='main'>
                    <div className='social-title'>
                        <h1>Contact me in social</h1>
                    </div>
                    <div className='social-links'>
                        <a href="https://www.linkedin.com/in/alexander-chako-907624154/" id='linkedin'>
                            <SiLinkedin/>
                        </a>
                        <a href="https://t.me/AleksandrChako" id='telegram'>
                            <FaTelegram/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export const ContactForm: React.FC<ContactFormProps> = props => {

    const {serviceID, templateID, userID} = props.config

    const sendEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        emailjs.sendForm(serviceID, templateID, event.target, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        event.target.reset()
    }

    return (
        <section className='contact-section'>
            <div className='row'>
                <div className='contact-title'>
                    <h1>... or send me an email</h1>
                </div>
                <Form className='contact-wrapper' onSubmit={sendEmail}>
                    <Input type="text" name="name" id="nameInput" placeholder="name"/>
                    <Input type="email" name="email" id="emailInput" placeholder="email"/>
                    <Input type="textarea" name="text" id="textInput" placeholder="your message"/>
                    <Button type="submit" id="submitButton">Submit</Button>
                </Form>
            </div>
        </section>
    )
}