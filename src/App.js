import './App.css';
import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Sidebar from './components/Sidebar';
import AboutPage from './components/pages/About';
import HobbiesPage from './components/pages/Hobbies';
import ProjectsPage from './components/pages/Projects';
import ContactPage from './components/pages/Contact';
import UXDesignPage from './components/pages/projects/UXDesign';
import DevelopmentPage from './components/pages/projects/Development';
import GraphicDesignPage from './components/pages/projects/GraphicDesign';

function App() {
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
                                    <Route path="/ux">
                                        <UXDesignPage />
                                    </Route>
                                    <Route path="/dev">
                                        <DevelopmentPage />
                                    </Route>
                                    <Route path="/gd">
                                        <GraphicDesignPage />
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