import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import '../../css/defaults.css';
import '../../css/projects.css';

class Descriptions extends Component {
    render() {
        return (
            <>
            <Row>
                <Col md={8}>
                    <h4 style={{textAlign: "left", margin: 0}} className="sectionHeading font">
                    {this.props.heading}
                    </h4>
                </Col>
                <Col md={1}/>
                    <Col md={3} style={{display: "flex"}}>
                        <a href={this.props.link} rel="noreferrer" target="_blank" style={{alignSelf: "flex-end", fontSize: "18px"}} className="font">Deployed app</a>
                </Col>
            </Row>
            <hr color={"blue"}/>
            <p style={{textAlign: "left"}} className="font"><span className="projfields">Description:</span>{this.props.desc}</p>
            <p style={{textAlign: "left"}} className="font"><span className="projfields">Tools:</span>{this.props.tools}</p>
            
            </>
        )
    }
}

export default Descriptions;
