import "./index.css";
import { Carousel, Container } from "react-bootstrap";

import hpcar1 from "../../imgs/hpcar1.png";
import hpcar2 from "../../imgs/hpcar2.png";
import hpcar3 from "../../imgs/hpcar3.png";

const Carousal = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={hpcar1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hpcar2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hpcar3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carousal;
