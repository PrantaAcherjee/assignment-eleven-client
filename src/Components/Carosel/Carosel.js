import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImg from '../../images/carosel1.jpg'
import secondImg from '../../images/carosel2.jpg'
import thirdImg from '../../images/carosel3.jpg'
import './Carosel.css';

const Carosel = () => {
    return (
 <div>
             
    <Carousel>
    <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 images img-fluid"
      alt="First slide"
      src={firstImg}
    />
    <Carousel.Caption>
       
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 images img-fluid"
      src={secondImg}
      alt="Second slide"
    />
    <Carousel.Caption>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 images img-fluid"
      src= {thirdImg}
      alt="Third slide"
    />
    <Carousel.Caption>
       
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
</div>
    );
};

export default Carosel;