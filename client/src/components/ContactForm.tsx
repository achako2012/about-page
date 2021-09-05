import React from "react";
import emailjs from 'emailjs-com'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export const ContactForm: React.FC = () => {
    console.log('hi')


    const sendEmail = (e: any) => {
        e.preventDefault();

        console.log('hi')

        emailjs.sendForm('service_uskhq3s', 'template_tld4aao', e.target, 'user_eTylOZ3BOiTo0iwssTpNN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <Form className='contact-wrapper' onSubmit={sendEmail}>

            {/*<Label for="exampleEmail">Name</Label>*/}
            <Input type="text" name="name" id="nameInput" placeholder="name"/>

            {/*<Label for="exampleEmail">Email</Label>*/}
            <Input type="email" name="email" id="emailInput" placeholder="email"/>

            {/*<Label for="exampleEmail">Message</Label>*/}
            <Input type="textarea" name="text" id="textInput" placeholder="your message"/>

            <Button type="submit" id="submitButton">Submit</Button>
        </Form>

        // <form className="contact-form" onSubmit={sendEmail}>
        //     <input type="hidden" name="contact_number"/>
        //     <label>Name</label>
        //     <input type="text" name="user_name"/>
        //     <label>Email</label>
        //     <input type="email" name="user_email"/>
        //     <label>Message</label>
        //     <textarea name="message"/>
        //     <input type="submit" value="Send"/>
        // </form>
    )
}