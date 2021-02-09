import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/defaults.css';
import '../css/contact.css';
import Form from '../components/contacts/contactform';

class Contact extends Component {
    render () {
        return (
            <Container fluid>
              <Row>
                <Col md={{span: 6, offset: 3}}>
                <h1 className= "pageHead"ref={this.props.rf}>Get in Touch</h1>
                </Col>
              </Row>

            <Row className="contactRow"> 
            <Col md={1} />
            <Col md={5}>
            <h4 className="sectionHeading subHeading font">Lets build something special</h4>
            <hr color={"blue"}/>
            <h5 className="font contactText">Don't hesitate to contact me! I embrace any chance to learn, and build great projects. Use the contact form to directly message me. Alternatively, you can find links to my pages below. </h5>
                </Col>  
                <Col md={1} />            
                <Col md={4}>
                <Form />
                </Col>
            </Row>
              </Container>
        )
    }
}

export default Contact;