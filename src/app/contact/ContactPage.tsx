import React from 'react';
import { EMAIL_CONFIGURATION } from 'fixtures';
import { ContactForm, Social } from './components/ContactForm';
import './components/ContactForm.scss';

export const ContactPage: React.FC = () => (
    <>
        <Social />
        <ContactForm config={EMAIL_CONFIGURATION} />
    </>
);
export default ContactPage;
