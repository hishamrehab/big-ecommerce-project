import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import  Shirt2 from  "../../Images/Check shirt2.jpg";
const ProductCart = () => {
  return (
    <Card style={{ width: "18rem", marginTop:"50px" }}>

      <Card.Img variant="top" src={Shirt2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCart;
