import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://t3.ftcdn.net/jpg/03/67/82/46/240_F_367824658_phQHccI3JCtI094QUJ69cWJ6SzTn8t3o.jpg'
          alt='First slide'
          width='1920'
          height='600'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://t4.ftcdn.net/jpg/03/12/86/53/240_F_312865329_ssJgRMK1Yt6uldB0T4W9KryeTKHVXsWG.jpg'
          alt='Second slide'
          width='1920'
          height='600'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://t4.ftcdn.net/jpg/01/14/79/01/240_F_114790121_7jY6bWBqDMg6yCFxLjfwj44nQENQQYkN.jpg'
          alt='Third slide'
          width='1920'
          height='600'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
