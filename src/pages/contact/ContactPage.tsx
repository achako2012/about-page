import React from 'react';
import { EMAIL_CONFIGURATION } from 'fixtures';
import Social from './components/social/Social';
import ContactForm from './components/contactForm/ContactForm';

export const ContactPage: React.FC = () => (
    <>
        <Social />
        <ContactForm config={EMAIL_CONFIGURATION} />
    </>
);

export default ContactPage;
