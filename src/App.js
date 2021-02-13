import logo from './logo.svg';
import './App.css';
import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Sidebar from './components/sidebar';

function App() {
  return (
     <Container fluid>
            <Row>
                <Col xs={2} id="sidebar-wrapper">      
                  <Sidebar />
                </Col>
                <Col  xs={10} id="page-content-wrapper">
                    this is a test
                </Col> 
            </Row>

        </Container>
    );
}

export default App;
