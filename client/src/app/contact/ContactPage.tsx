import React from 'react';
import { ContactForm, Social } from './components/ContactForm';
import { EMAIL_CONFIGURATION } from '../../fixtures';
import './components/ContactForm.css';

export const ContactPage: React.FC = () => (
    <>
        <Social />
        <ContactForm config={EMAIL_CONFIGURATION} />
    </>
);
export default ContactPage;
