import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/defaults.css';
import '../css/projects.css';
import Carousel from '../components/projects/projectCarousel';
import Desc from '../components/projects/descriptions';
import github from '../utils/images/githublogo.png';

class Projects extends Component {

    render() {
      const nerdHerrdDesc= "NerdHerrd is a MERN Stack site that serves as a community for trading card fans. Users can add cards to their profile, find others to trade with, and negogiate trades via the chatroom feature.";
      const nerdHerrdTools= "JS ES6 (React/Node/Express/Socket.io), Firebase, MongoDB, APIs";
      const sortDesc= "React App that visualizes popular sorting algorithms ti analyze the difference in method of sorting, as well as speed.";
      const sortTools= "JS ES6, React, Node, HTML/CSS, Bootstrap";
      const snakeDesc= "My take on a classic game. Try to eat as many targets as possible without leaving the grid, or eating yourself!";
      const snakeTools= "JS ES6, Node, MongoDB, HTML/CSS, webSockets";
        return (
            <Container fluid>
              <Row>
                <Col sm lg={12} xl={{span: 6, offset: 3}}>
                <h1 className= "pageHead"ref={this.props.rf}>Some of my favorite Projects</h1>
                </Col>
              </Row>
              
                <Row className="carouselRow">
                  {/* <Col md={1} /> */}
                  <Col lg={6} sm={12} md={12}>
                    <Carousel />
                    <Row className="visitGitRow">
                  <Col sm={8} md={8}>
                    <h2 className="font viewMore">Looking to view more?</h2>
                    <h6 className="font visitGit">Visit my github page to view source code for the projects above & more!</h6>
                  </Col>
                  <Col md={4} sm={3} style={{margin: "auto 0", paddingLeft: "0"}}>
                  <a className="gitlogo" target="_blank" rel="noreferrer" href="https://github.com/nickkdb"><img src={github} alt="github" height={"75"} width={"125"}/></a>
                  </Col>
                </Row>                                                              
                  </Col>
                  <Col sm lg={6} xl={5} className="projDescriptions">
                    <Desc 
                    heading="Nerd Herrd"
                    link="https://nerdherd-group5.herokuapp.com/"
                    desc={nerdHerrdDesc}
                    tools={nerdHerrdTools}
                    />   
                    <Desc 
                    heading="Sorting Algorithm Visualizer"
                    link="https://nickkdb.github.io/Sorting-Visualizer/"
                    desc={sortDesc}
                    tools={sortTools}
                    />   
                    <Desc 
                    heading="Snake, The Game!"
                    link="https://playsnakejs.herokuapp.com/"
                    desc={snakeDesc}
                    tools={snakeTools}
                    />                                       
                  </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects;