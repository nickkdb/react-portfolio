import React, { Component } from 'react';
import { Row, Col, Jumbotron, Button} from 'react-bootstrap';
// import Bar from './bar';
import '../../css/about.css';
// import '../../css/defaults.css';
import logo from '../../utils/images/skillslogo.png';
import CV from '../../utils/Resume/nicolasBorgesResume.pdf';

class Section2 extends Component {
    render() {
        return (
            <>
            {/* <Row className= "skillsRow">
                  <Col sm lg={6} md={12} className="skillsCol">
                      <Bar />
                  </Col>
                  <Col sm xl={5} lg={6} md={12}>
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
                  <Col md={1} />
            </Row> */}
            <Row className="cvRow">
                <Col md={{span: 6, offset: 3}}>
                <Button href={CV} variant="outline-primary" target="_blank" size="lg">Download my Resume</Button>
                </Col>
            </Row>
            </>
        )
    }
}

export default Section2;