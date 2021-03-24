import React from 'react';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import bg from '../../assets/bg-petals.png';
import pic from '../../assets/pic-kelvin-prom.JPG';

function HomePage() {
    return (
        <>
            <Image className="strip" src={bg} alt="banner image of pink flowers surrounded by a blue sky with clouds" />
            <Row id="welcome-strip">
                <Col xs={12} md={4}>
                    <Image src={pic} alt="photograph of Kelvin Kellner" fluid/>
                </Col>
                <Col xs={12} md={7} style={{marginLeft: 10}}>
                    <h2 style={{marginTop: 40, marginBottom: 0}}>hi there<span>,</span></h2>
                    <h2 style={{marginLeft: 20}}>my name is kelvin<span>!</span></h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Who am I<span>?</span></h4>
                </Col>
            </Row>
        </>
    );
}

export default HomePage;