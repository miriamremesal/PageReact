import Carousel from 'react-bootstrap/Carousel';
import imgCarousel from '../../src/assets/images/Carousel.png'
import imgCarousel2 from '../../src/assets/images/Carousel2.png'
import imgCarousel3 from '../../src/assets/images/carousel3.png'

function CarrouselTech() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgCarousel}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgCarousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgCarousel3}
          alt="Third slide"
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
export default CarrouselTech;