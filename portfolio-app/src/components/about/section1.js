import React, { Component } from 'react';
import {Row, Col, Jumbotron} from 'react-bootstrap';
import '../../css/about.css';
// import '../../css/defaults.css';
import headshot from '../../utils/images/headshot2.png';
import logo from '../../utils/images/skillslogo.png';

class Section1 extends Component {
    render() {
        return (
            <>
                <Row className= "jumboRow">
                  {/* <Col md={1}/> */}
                  <Col style={{marginTop: "4rem"}} sm={12} xl={5} lg={6} md={12}>
                  <Jumbotron style={{borderRadius: "1.5rem"}} className="jumbo whoJumbo">
                    <Row>
                      <Col className="whoCol" style={{alignSelf: "center"}} xl={5} lg={12} md={{span: 6, offset: 3}}>
                      <h1 className= "who font">Who am I?</h1>
                      </Col>
                      <Col style={{paddingTop: "25px"}} lg={12} md={6} xl={6}>
                        <img id= "headshot" src={headshot} alt="avatar" width={"250"} height={"250"} />
                      </Col>
                    </Row>
                    <Row style={{marginTop: "20px"}}>
                      <Col md={12}>
                      <p className="jumboText font">
                      Aspiring full stack web/software developer. The strategic-based nature of building a project fascinates me, and the feeling when your approach and design leads to a deliverable result is unbeatable.
                       </p>
                      </Col>
                    </Row>
                </Jumbotron>
                  </Col>
                  <Col md={12} lg={6} sm={12} className="storyCol">
                  <Row className="storyheading">
                    <Col lg={{span: 8, offset: 2}} md={12}>
                    <h4 className="sectionHeading font">
                      My Story
                    </h4>
                    <hr color={"blue"}/>
                    </Col>
                  </Row>
                  <Row className="storyrow font">
                  <p className="storytext"> 
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
                <Row className="hobbiesRow">
                  <Col md={12} lg={5} sm={12} className="hobbiesCol">
                    <h4 className="sectionHeading font">
                      When I'm not coding, I enjoy 
                    </h4>
                    <hr color={"blue"}/>
                    <Row id="innerHobbyRow">
                      <Col md={1} className="filler" />
                      <Col lg={5} sm md={6} className="list">
                      <ul>
                      <li className="liItem">Hiking</li>
                      <li className="liItem">Chess</li>
                      <li className="liItem">Snowboarding</li>
                    </ul>
                      </Col>
                      <Col sm lg={5} md={6} className="list">
                        <ul>
                          <li className="liItem">Traveling</li>
                          <li className="liItem">Sports</li>
                        </ul>
                      </Col>
                      <Col md={1} />
                    </Row>
                  </Col>
                  <Col md={1} />
                  <Col md={12} lg={6} sm={12}>
                  <Jumbotron style={{borderRadius: "1.5rem"}} className="jumbo skillsJumbo">
                  <Row>
                      <Col md={1} />
                      <Col style={{alignSelf: "center"}} xl={5} lg={12} md={5}>
                      <h1 id= "edandskills" className="font">Education & Skills</h1>
                      </Col>
                      <Col style={{paddingTop: "25px"}} md={5} xl={5} lg={12}>
                      <img id="skillslogo" src={logo} alt="logo" height={"250"} width={"300"}/>
                      </Col>
                      <Col md={1} />
                    </Row>
                    <Row>
                      <Col md={12}>
                      <p className=" edskillstext font">
                      I attend Rutgers University for undergraduate, where I was exposed to programming by fellow students, along with CS courses. I went on to pursue programming after by attending Rutgers Universties' Coding Bootcamp, completing other online courses, and spending countless hours learning the art.
                       </p>
                      </Col>
                    </Row>
                </Jumbotron>
                  </Col>
                </Row>
            </>
        )
    }
}

export default Section1;