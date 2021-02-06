import React, { Component } from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';

class About extends Component {

    render() {
        return (
            <Container>
                <h1 ref={this.props.rf}>About</h1>
                <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
            </Container>
        )
    }
}

export default About;