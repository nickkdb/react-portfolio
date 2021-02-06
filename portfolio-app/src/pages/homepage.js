import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';
import './homepage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      let w= window.innerWidth;
      let colSize;
      if (w < 1025) {
        colSize= 10
      } else {
        colSize= 6
      }
        return (
          <div>
            <Jumbotron id="jumbo" className="vertical-center jumbotron jumbotron-fluid" fluid>
            <Container className="wrapper" fluid>
              <Row className="welcomeRow">
                <Col className="welcomeCol" md={colSize}>
                  <h1 className="welcomeText">Nicolas Borges</h1>
                  <hr color= {"#B0E0E6"}></hr>
                  <h1 className="welcomeText">Welcome to my Portfolio</h1>
                </Col>
              </Row>
            </Container>
            <Container className="learnWrapper" fluid>
            <Row className="learnRow">
              <Col className="learnCol">
              <h4 onClick={() => this.props.fxn(1)} className="learnText">Learn more about me</h4>
              <FontAwesomeIcon className="arrow fa-2x" icon={faAngleDown}/>
              </Col>
            </Row>
            </Container>
            </Jumbotron>
          </div>
        )
    }
}

export default Homepage; 