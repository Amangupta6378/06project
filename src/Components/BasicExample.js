import Accordion from "react-bootstrap/Accordion";
import Data from "../Components/Cards";
import { useState } from "react";

function BasicExample() {
  const [products, setProducts]= useState( [
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
  ]);
  





  // let updateData = (gender) => {
  //   const filteredItems = Data.filter((item) => item.gender.toLowerCase() === gender.toLowerCase());
  //   setProducts(filteredItems);
  // };


  const updateData = (event)=>{
    const item= Data.filter((e)=>{
      if(e.gender==event){
        return e
      }
    })
    setProducts(item);
  }

  // const Reduce = (event) => {
  //   const items = products.filter((e) => {
  //     if (e.color == event) {
  //       return e;
  //     }
  //   })
//     setProducts(items);
//   }
 
  // const initialData=[]

  // const [data, setData] = useState(initialData);

  // const  = (gender) => {
  //   const filteredData = initialData.filter(
  //     (item) => item.gender.toLowerCase() === gender.toLowerCase()
  //   );
  //   setData(filteredData);
  // };
  // const dopa = Data.filter((item) => item.gender === "Male");
  // console.log(dopa);

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
          <button
            onClick={() =>  updateData}
            style={{ cursor: "pointer" }}
          >
            Male
          </button>
        </Accordion.Body>
        <Accordion.Body>
          <p>Female</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>category</Accordion.Header>
        <Accordion.Body className="">
          <p>T-shirt</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>Vest</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
          <p>X</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>M</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>L</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body className="">
          <p>Red</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>Black</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>Blue</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>Yellow</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Brand</Accordion.Header>
        <Accordion.Body className="">
          <p>Nike</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>Addidas</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>Gucci</p>
        </Accordion.Body>
        <Accordion.Body>
          <p>Polo</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Design</Accordion.Header>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
