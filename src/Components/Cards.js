import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicExample from "../Components/BasicExample";
import Output from "./Output";
// import Data from '../Components/Data'

// import BasicExample from './Navbar';

const Cards = () => {
  const Data = [
    {
      image:
        "https://images.bewakoof.com/t640/men-s-black-straw-hat-crew-graphic-printed-oversized-t-shirt-630819-1708598320-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "M",
      Color: "Black",
      gender: "Male",
      Category: "T-shirt",
    },
    {
      image:
        "https://images.bewakoof.com/t640/men-s-black-one-piece-graphic-printed-oversized-t-shirt-630630-1709105339-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "L",
      Color: "Black",
      gender: "Male",
      Category: "T-shirt",
    },
    {
      image:
        "https://images.bewakoof.com/t640/men-s-blue-pirate-crew-graphic-printed-oversized-t-shirt-630626-1709104734-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "S",
      Color: "Blue",
      gender: "Male",
      Category: "T-shirt",
    },
    {
      image:
        "https://images.bewakoof.com/t640/men-s-red-weapon-xi-graphic-printed-t-shirt-630777-1706686786-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "L",
      Color: "Red",
      gender: "Male",
      Category: "T-shirt",
    },
    {
      image:
        "https://images.bewakoof.com/t640/men-s-white-customizable-oversized-t-shirt-592598-1685445506-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "M",
      Color: "White",
      gender: "Male",
      Category: "T-shirt",
    },
    {
      image:
        "https://images.bewakoof.com/t640/men-s-green-moss-head-graphic-printed-oversized-t-shirt-627751-1700720357-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "M",
      Color: "White",
      gender: "Male",
      Category: "T-shirt",
    },
    {
      image:
        "https://images.bewakoof.com/t640/unisex-purple-can-graphic-printed-t-shirt-547990-1680607259-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "M",
      Color: "Purple",
      gender: "Male",
      Category: "Vest",
    },
    {
      image:
        "https://images.bewakoof.com/t640/unisex-purple-gojo-satoru-graphic-printed-t-shirt-597955-1690875381-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "M",
      Color: "Purple Gojo",
      gender: "female",
      Category: "Vest",
    },
    {
      image:
        "https://images.bewakoof.com/t640/unisex-off-white-being-bong-graphic-printed-t-shirt-581126-1705483610-1.jpg",
      name: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
      price: "Rs 599",
      size: "M",
      Color: "White",
      gender: "female",
      Category: "vest",
    },
  ];

  return (
    <Container>
      <h2 className="heading mt-5">Printed T Shirts for Men</h2>
      {/* <hr style={{height:"2px"border-width:"0";color:gray;background-color:primary}}></hr> */}
      <hr
        width="100px"
        height="5px"
        className=" h-5px"
        style={{ height: "5px" }}
      ></hr>

      <Row>
        <Col xs lg="3" className="mt-5">
          {" "}
          <BasicExample></BasicExample>
        </Col>
        <Col xs lg="9">
          <img
            className="mt-5"
            width="100%"
            height="auto"
            alt="image"
            src="https://images.bewakoof.com/uploads/category/desktop/Printed-T-Shirts_Inside_Desktop-Banner_IK-1704957421.jpg"
          ></img>
          {Data.map((item) => {
            return <Output aman={item}></Output>;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
