import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import panel1 from '../../../assets/bg-cocoabeans.JPG';
import panel2 from '../../../assets/bg-flowersky.JPG';
import panel3 from '../../../assets/bg-pillars.JPG';
import panel4 from '../../../assets/bg-shells.jpg';

const panels = [
    [panel1, "missing alt text"],
    [panel2, "missing alt text"],
    [panel3, "missing alt text"],
    [panel4, "missing alt text"]
];

function UXDesignPage() {
    return (
        <>
            <h4 className="heading">ux design<span>.</span></h4>

            <Row className="panel-gallery">
                {panels.map((p) =>
                <Col xs={12} md={6}>
                    <div className="panel-item">
                        <Image className="panel" src={p[0]} alt={p[1]} />
                        <Container fluid>
                            <h4>Project Title</h4>
                            <h5>Role in Project</h5>
                            <p>One-liner explaination</p>
                        </Container>
                    </div>
                </Col>
                )}
            </Row>
        </>
    );
}

export default UXDesignPage;