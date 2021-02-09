import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/defaults.css';
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

            <Row style={{marginTop: "4rem", marginBottom: "4rem"}}>               
                <Col md={{span: 4, offset: 4}}>
                <Form />
                </Col>
            </Row>
              </Container>
        )
    }
}

export default Contact;