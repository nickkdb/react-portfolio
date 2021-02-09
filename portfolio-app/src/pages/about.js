import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/about.css';
import '../css/defaults.css';
import Section1 from '../components/about/section1';
import Section2 from '../components/about/section2';

class About extends Component {

    render() {
        return (
          <Container className="aboutWrapper" fluid>
              <Row>
                <Col md={{span: 6, offset: 3}}>
                <h1 className="pageHead" ref={this.props.rf}>About Me</h1>
                </Col>
              </Row>
              <Section1 />
              <Section2 />
                
          </Container>
                
        )
    }
}

export default About;


