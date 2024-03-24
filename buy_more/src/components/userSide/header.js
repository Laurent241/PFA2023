import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    // <Container >

    <Carousel data-bs-theme="dark"  style={{filter:' saturate(400%)'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/BM1.png"
        //   width={'100%'}
        //  height={200}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/BM2.png"
        //   width={200}
        //  height={360}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/BM3.png"
        //   width={200}
        //  height={360}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  //  </Container>
  );
}

export default Header;


