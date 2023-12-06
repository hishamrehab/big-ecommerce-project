import React from "react";

import BlackImage from "../../Images/blackimage.jpeg";
import { Row, Container, Col } from "react-bootstrap";

const DiscountSection = () => {
  return (
    <Container>
      <Row className=" mt-3 mx-2 d-flex text-center align-items-center">
    
        <Col sm="6">
          <img src={BlackImage} alt="" style={{
            width:"1000px",
            height:"80px"
          }}/>
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
