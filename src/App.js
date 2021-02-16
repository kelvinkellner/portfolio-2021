import './App.css';
import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import dotenv from './dotenv';

import Sidebar from './components/Sidebar';
import AboutPage from './components/pages/About';
import HobbiesPage from './components/pages/Hobbies';
import ProjectsPage from './components/pages/Projects';
import ContactPage from './components/pages/Contact';

function App() {
    dotenv();
    return (
        <Container fluid>
            <Router>
                <Row>
                    <Col xs={12} md={4} xl={3}  id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col xs={12} md={8} xl={9} id="page-content-wrapper">
                        <Container id="page-content">
                            <Switch>
                                <Route exact path="/">
                                    <AboutPage />
                                </Route>
                                <Route path="/projects">
                                    <ProjectsPage />
                                </Route>
                                <Route path="/hobbies">
                                    <HobbiesPage />
                                </Route>
                                <Route path="/contact">
                                    <ContactPage />
                                </Route>
                            </Switch>
                        </Container>
                    </Col> 
                </Row>
            </Router>

            </Container>
        );
}

export default App;