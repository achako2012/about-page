import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, Input } from 'reactstrap';
import { useNotification } from '../../../../hooks/notification.hooks';
import { ToastPosition, ToastType } from '../../../../types';
import logger from '../../../../logger';
import { Toast } from '../../../notifications/Toast';

import './ContactForm.scss';

interface ContactFormProps {
    config: {
        serviceID: string;
        templateID: string;
        userID: string;
    };
}

const ContactForm: React.FC<ContactFormProps> = ({
    config: { serviceID, templateID, userID }
}: ContactFormProps) => {
    const { currentToast, showToast } = useNotification();

    const sendEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        emailjs.sendForm(serviceID, templateID, event.target, userID).then(
            (result) => {
                if (result.text === 'OK') {
                    showToast(ToastType.Success, 'Email sent');
                } else {
                    showToast(ToastType.Warning, 'Some unexpected response');
                }
            },
            (error) => {
                showToast(ToastType.Error, 'Some error occured');
                logger.log(error.text);
            }
        );

        event.target.reset();
    };

    return (
        <section className="section__contact">
            <div className="container">
                <div className="contact-form">
                    <div className="contact-title">
                        <h1>... or send me an email</h1>
                    </div>
                    <Form className="contact-wrapper" onSubmit={sendEmail}>
                        <Input type="text" name="name" id="nameInput" placeholder="name" />
                        <Input type="email" name="email" id="emailInput" placeholder="email" />
                        <Input
                            type="textarea"
                            name="message"
                            id="textInput"
                            placeholder="your message"
                        />
                        <Button type="submit" id="submitButton" color="secondary" size="sm">
                            Submit
                        </Button>
                    </Form>
                </div>
                {currentToast ? (
                    <Toast
                        position={ToastPosition.BottomMiddle}
                        currentToast={currentToast}
                        autoDelete={2 * 1000}
                    />
                ) : null}
            </div>
        </section>
    );
};

export default ContactForm;
