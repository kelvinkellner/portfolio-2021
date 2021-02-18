import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    const [status, setStatus] = useState(0);

    const handleSubmit = e => {
        const form = e.currentTarget;
        setStatus(0);
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
            console.log(data);
            console.log(form);
            console.log(templateParams);
            setStatus(-1);
            // await emailjs.send(
            //     process.env.REACT_APP_SERVICE_ID,
            //     process.env.REACT_APP_TEMPLATE_ID,
            //     templateParams,
            //     process.env.REACT_APP_USER_ID
            // ).then(function(response) {
            //     console.log('SUCCESS!', response.status, response.text);
            //     setValidated(false);
            //     form.reset();
            //     setStatus(1);
            // }, function(error) {
            //     console.log('FAILED...', error);
            //     setStatus(-1);
            // });
        } catch (e) {
            console.log(e);
        }
    };

    const alert = () => {
        if(status===1 || status===-1) {
            return (
                <Alert variant={status===1 ? "success" : "danger"} style={{padding: "2rem", marginBottom:"2rem"}} onClose={() => setStatus(0)} dismissible>
                    <Alert.Heading className="font-weight-bold">
                        {status===1 ? "Your message was sent successfully!" : "Your message failed to send!"}
                        </Alert.Heading>
                    <p style={{marginBottom: 0}}>
                        {status===1 ? "Thank you for taking the time to contact me, I will get back to you as soon as I can."
                        : "Feel free to contact me on social media and I will fix this issue as soon as I can. Sorry about that!"}
                        </p>
                </Alert>)
        } else return;
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            {alert()}

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