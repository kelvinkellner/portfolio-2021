import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import emailjs, { init } from 'emailjs-com';

const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    

    const handleSubmit = e => {
        const form = e.currentTarget;
        if(form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            submitEmail(e, form);
        }
        setValidated(true);
    };

    const submitEmail = async (data, form) => {
        try {
            const templateParams = {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            ).then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                //setValidated(false);
                //form.reset();
            }, function(error) {
                console.log('FAILED...', error);
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group xs={12} lg={6} as={Col} controlId="formContactName">
                <Form.Label>Name</Form.Label>
                <Form.Control required maxLength="30" type="text" size="lg" placeholder="Enter name" />
                <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group xs={12} lg={6} as={Col} controlId="formContactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" size="lg" placeholder="Enter email address" />
                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formContactSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control maxLength="75" type="text" size="lg" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formContactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control required type="text" size="lg" as="textarea" placeholder="Enter message" />
                <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
            </Form.Group>

            <Button className="main-color-button" size="lg" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ContactForm;