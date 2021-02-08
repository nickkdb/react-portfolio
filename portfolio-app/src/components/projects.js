import React, { Component } from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';

class Projects extends Component {

    render() {
        return (
            <Container fluid>
              <Row>
                <Col md={{span: 6, offset: 3}}>
                <h1 ref={this.props.rf}>Projects</h1>
                </Col>
              </Row>

                <Row>
                  <Col md={2}/>
                  <Col style={{marginTop: "4rem"}} md={4}>
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
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <Col md={2}/>
                  <Col style={{marginTop: "4rem"}} md={4}>
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
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <Col md={2}/>
                  <Col style={{marginTop: "4rem"}} md={4}>
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
                  </Col>
                  <Col />
                </Row>
                
            </Container>
        )
    }
}

export default Projects;