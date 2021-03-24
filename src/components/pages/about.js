import React from 'react';

import Image from 'react-bootstrap/Image';

function AboutPage() {
    return (
        <>
            <h4 className="heading">hi there<span>,</span></h4>
            <Image src="https://avatars.githubusercontent.com/u/19508210" fluid />
            <p>My name is Kelvin.</p>

            <h3>Who am I<span>?</span></h3>
        </>
    );
}

export default AboutPage;