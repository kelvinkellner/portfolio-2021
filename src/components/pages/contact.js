import React from 'react';
import { Image } from 'react-bootstrap';

import bg from '../../assets/bg-flowersky.JPG'

function ContactPage() {
    return (
        <>
            <Image className="strip" src={bg} />
            <h4 className="heading">contact me<span>.</span></h4>
        </>
    );
}

export default ContactPage;