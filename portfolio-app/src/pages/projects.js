import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/defaults.css';
import '../css/projects.css';
import Carousel from '../components/projects/projectCarousel';
import Desc from '../components/projects/descriptions';
import github from '../utils/images/githublogo.png';

class Projects extends Component {

    render() {
      const fiveWireDesc= "5wire is a web-based music app built through spotify. Users can create and save playlists to their account, and listen to music within their browser";
      const fiveWireTools= "HTML5/CSS3, JS ES6 (node.js/expres.js), mySQL, MVC, Spotify API";
      const employeeDesc= "React app that manages and filters a database of employees";
      const employeeTools= "HTML5/CSS3, JS ES6 (node.js/react.js), Bootstrap";
      const flightDesc= "This app gives users the ability to plan and save a trip with flight and weather data based on input from the user";
      const flightTools= "HTML5/CSS3, Materialize, Js & jQuery, APIs";
        return (
            <Container fluid>
              <Row>
                <Col md={{span: 6, offset: 3}}>
                <h1 className= "pageHead"ref={this.props.rf}>Some of my favorite Projects</h1>
                </Col>
              </Row>
              
                <Row className="carouselRow">
                  <Col md={1} />
                  <Col md={6}>
                    <Carousel />
                  </Col>
                  <Col md={5} className="projDescriptions">
                    <Desc 
                    heading="5wire"
                    link="https://group5-proj2.herokuapp.com/"
                    desc={fiveWireDesc}
                    tools={fiveWireTools}
                    />   
                    <Desc 
                    heading="Employee Directory"
                    link="https://nickkdb.github.io/EmployeeDirectory/"
                    desc={employeeDesc}
                    tools={employeeTools}
                    />   
                    <Desc 
                    heading="Flight Saver"
                    link="https://nickkdb.github.io/FlightSaver/"
                    desc={flightDesc}
                    tools={flightTools}
                    />                                       
                  </Col>
                </Row>

                <Row className="visitGitRow">
                  <Col md={1} />
                  <Col md={4}>
                    <h2 className="font viewMore">Looking to view more?</h2>
                    <h6 className="font visitGit">Visit my github page to view source code for the projects above & more!</h6>
                  </Col>
                  <Col md={1}>
                  <a className="gitlogo" target="_blank" rel="noreferrer" href="https://github.com/nickkdb"><img src={github} alt="github" height={"75"} width={"125"}/></a>
                  </Col>
                </Row>                                                              
            </Container>
        )
    }
}

export default Projects;