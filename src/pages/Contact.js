import React from 'react';
import Header from '../components/header';
import ContactForm from '../components/ContactForm';
import SocialsImg from '../assets/contactimg.png';

const Contact = () => {
    return (
        <div>
            <Header />
            <div className='contact-container'>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;