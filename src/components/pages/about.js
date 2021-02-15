import React from 'react';
import { Image } from 'react-bootstrap';

function AboutPage() {
    return (
        <>
            <h4 className="heading">hi there<span>,</span></h4>
            <Image src="https://avatars.githubusercontent.com/u/19508210" fluid />
            <p>My name is Kelvin.</p>
        </>
    );
}

export default AboutPage;