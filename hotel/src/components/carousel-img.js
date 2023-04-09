import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';


// import img1 from './../images/hotel1.jpg';
// import img11 from './../images/hotel11.jpg';
import img2 from './../images/hotel2.jpg';
import img3 from './../images/hotel3.png';
// import img4 from './../images/hotel4.jpg';
// import img5 from './../images/hotel5.jpg';
import img6 from './../images/hotel11.png';
import img8 from './../images/hotel8.jpg';

function CarouselImages() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img8}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Welcome to Hotel começar</h3>
          <p>
            Book the perfect accomodations.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Rooms & Suits</h3>
          <p>Each of our rooms and suites was designed to offer unmatched comfort and convenience.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Restaurants</h3>
          <p>
            Enjoy some of the finest and most varied dining options right at the hotel.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img6}
          alt="fourth slide"
        />

        <Carousel.Caption>
          <h3>Special Offers</h3>
          <p>
            Discover all of our offers and packages for an extra-special stay by contacting us.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselImages;