import FirstImg from "../../Images/Black T-shirt.png";
import SecoundImg from "../../Images/blackshart.jpg";
import ThiredImg from "../../Images/Blue T-shirt.jpg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={FirstImg}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={SecoundImg}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={ThiredImg}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
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
};

export default Slider;
