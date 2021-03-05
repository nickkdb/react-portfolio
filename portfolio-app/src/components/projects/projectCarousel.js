import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '../../css/defaults.css';
import '../../css/projects.css';
import flightSaver from '../../utils/images/screenshot.png';
import nerdHerrd from '../../utils/images/nerdherrd.png';
import booksearch from '../../utils/images/booksearch.png';

class projectCarousel extends Component {
    render() {
        return (
            <>
            <Carousel className="slider">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nerdHerrd}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={booksearch}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={flightSaver}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
            </>
        )
    }
}

export default projectCarousel;