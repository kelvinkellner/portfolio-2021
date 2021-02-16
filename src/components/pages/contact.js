import React from 'react';
import { Image } from 'react-bootstrap';

import bg from '../../assets/bg-flowersky.JPG'

import ContactForm from '../ContactForm';

function ContactPage() {
    return (
        <>
            <Image className="strip" src={bg} alt="banner image of pink flowers surrounded by a blue sky with clouds" />
            <h4 className="heading">contact me<span>.</span></h4>
            <ContactForm />
        </>
    );
}

export default ContactPage;