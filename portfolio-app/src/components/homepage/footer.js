import React, { Component } from 'react';
import {Navbar, Container, Row, Col} from 'react-bootstrap';
import '../../css/footer.css';
import '../../css/defaults.css';
import linkedIn from '../../utils/images/linkedInlogo.png';
import github from '../../utils/images/githublogowhite.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";


class Footer extends Component {
    render() {
        const linkedInUrl= "https://www.linkedin.com/in/nicolas-borges-4785b4203/";
        const githubUrl= "https://github.com/nickkdb";
        const mailUrl= "mailto:nborges.dev@gmail.com";
        
        return (
            <Navbar className="footer" expand="lg" variant="dark">
                <Container fluid>
                <Row className="footerRow">  
                    <Col md={3} className="footerText">
                <Navbar.Text>
                <span className="designedby">Design and Development by: </span><span className="myname">Nicolas Borges</span>
                </Navbar.Text>
                    </Col>
                    <Col md={5} />
                    <Col className="icons d-flex justify-content-center" md={4}>
                    <a href={linkedInUrl} target="_blank" rel="noreferrer" >
                    <img  className="linkedin" src={linkedIn} height={"60px"} width={"100px"} alt="linkedIn" />
                    </a>
                    <a href={githubUrl} target="_blank" rel="noreferrer" >
                    <img className="git" src={github} height={"55px"} width={"120px"} alt="github" />
                    </a>
                    <a href={mailUrl} target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon className="email arrow fa-3x" icon={faEnvelopeOpen}/>   
                    </a>
                    </Col>
                </Row>
                </Container>
        </Navbar>
        )
    }
}

export default Footer;