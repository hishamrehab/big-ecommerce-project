import React from "react";
import { Col } from "react-bootstrap";

const CategoryCart = ({ background, img, title }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4  d-flex justify-content-around "
    >
      <div className="allCard md-3">
        <div
          className="category-card"
          style={{
            backgroundColor: "#777",
            height: "150px",
            width:"100px",
            borderRadius: "60%",
          }}
        >
          <img
            alt="zcv"
            src={img}
            className="category-card-img"
            style={{
              width: "100px",
              height: "150px",
              borderRadius: "60%",
            }}
          />
          <p className="category-card-text my-2">{title}</p>
        </div>
      </div>
    </Col>
  );
};

export default CategoryCart;
