import React, { Component } from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import '../css/about.css';
import headshot from '../utils/images/headshot2.png';

class About extends Component {

    render() {
        return (
          <Container className="aboutWrapper" fluid>
              <Row>
                <Col md={{span: 6, offset: 3}}>
                <h1 ref={this.props.rf}>About</h1>
                </Col>
              </Row>

                <Row className= "jumboRow">
                  <Col md={1}/>
                  <Col style={{marginTop: "4rem"}} md={5}>
                  <Jumbotron className="aboutJumbo">
                    <h1 className= "who">Who am I?</h1>
                    <img id= "headshot" src={headshot} alt="avatar" width={"250"} height={"250"} />
                      <p className="jumboText">
                      Aspiring full stack web/software developer. The strategic-based nature of building a project fascinates me, and the feeling when your approach and design leads to a deliverable result is unbeatable.
                       </p>
                </Jumbotron>
                  </Col>
                  <Col md={6} style={{display: "flex"}}>
                  <Row className="textrow row align-self-end">
                    <p className="statement"> 
                      Since a young age, I’ve loved using logic and creativity to solve problems. 
                      It started with fixing classmates’ mechanical pencils for a quarter in first grade and has led me all the way to programming. 
                      
                      <br/><br/>
                      Outside of coding, I'm an easy-going guy who loves learning new things and meeting new people.
                      A motto I live by is, "The more you know, the more you'll understand others".
                      Hearing new stories and understanding different perspectives
                      is a challenge I'm happy to face. I believe being open-minded, creative, and considering
                      all points of view is essential in life, just as it is in coding. 
                      </p>
                  </Row>
                  </Col>
                </Row>
                <Row className="skillsRow">
                  <Col md={1} />
                  <Col md={5}>
                    <h4 className="sectionHeading">
                      When I'm not coding, I enjoy 
                    </h4>
                    <hr color={"blue"}/>
                    <Row>
                      <Col md={1} />
                      <Col md={5} className="con">
                      <ul>
                      <li>Hiking</li>
                      <li>Snowboarding</li>
                      <li>Chess</li>
                    </ul>
                      </Col>
                      <Col md={5} className="con">
                        <ul>
                          <li>Traveling</li>
                          <li>Sports</li>
                        </ul>
                      </Col>
                      <Col md={1} />
                    </Row>
                  </Col>
                </Row>
          </Container>
                
        )
    }
}

export default About;


