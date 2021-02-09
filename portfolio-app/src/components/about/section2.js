import React, { Component } from 'react';
import { Row, Col, Jumbotron, Button} from 'react-bootstrap';
import Bar from './bar';
import '../../css/about.css';
import '../../css/defaults.css';
import logo from '../../utils/images/skillslogo.png';
import CV from '../../utils/CV/NicolasBorgesCV.pdf';

class Section2 extends Component {
    render() {
        return (
            <>
            <Row className= "skillsRow">
                  <Col md={6} className="skillsCol">
                      <Bar />
                  </Col>
                  <Col md={{span: 5, offset: 3.5}}>
                  <Jumbotron style={{borderRadius: "1.5rem"}} className="jumbo skillsJumbo">
                    <h1 id= "edandskills" className="font">Education & Skills</h1>
                    <img id="skillslogo" src={logo} alt="logo" height={"250"} width={"350"}/>
                      <p className=" edskillstext font">
                      I attend Rutgers University for undergraduate, where I was exposed to programming by fellow students, along with CS courses. I went on to pursue programming after by attending Rutgers Universties' Coding Bootcamp, completing other online courses, and spending countless hours learning the art.
                       </p>
                </Jumbotron>
                  </Col>
                  <Col md={1} />
            </Row>
            <Row className="cvRow">
                <Col md={{span: 6, offset: 3}}>
                <Button href={CV} variant="outline-primary" target="_blank" size="lg">Download my CV</Button>
                </Col>
            </Row>
            </>
        )
    }
}

export default Section2;