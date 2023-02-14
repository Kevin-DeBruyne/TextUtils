import { useState } from "react";
import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function Body() {
  const [name, setName] = useState("");
  // const [card, setCard] = useState("");
  const [Array, setArray] = useState([]);
  const changeHandler = (event) => {
    // console.log(event);
    setName(event.target.value);
  };
  
  // const username = "hope_09";
  // let arr=[];
  // let obj;
  const FetchData = () => {
    // obj={ user : name }
    // setCard(name)
    fetch(`https://leetcode-stats-api.herokuapp.com/${name}`)
    .then((response) => response.json())
    // .then(() => setArray((current) => [...current, obj]))
    .then((data) => setArray(current => [...current, data]))
    .catch((error) => console.error(error));
  };
  let nm = {name};
  return (
    <>
      <input
        placeholder="Enter username"
        onChange={changeHandler}
        type="text"
        name="name"
      />
      <Button onClick={FetchData} variant="primary">
        Primary
      </Button>
      <br />
      {Array.map((x) => (
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            {/* <ListGroup.Item>{x.user}</ListGroup.Item> */}
            <ListGroup.Item>
              Total Problems Solved:{x.totalSolved}
            </ListGroup.Item>
            <ListGroup.Item>Easy Problems Solved:{x.easySolved}</ListGroup.Item>
            <ListGroup.Item>
              Medium Problems Solved: {x.mediumSolved}
            </ListGroup.Item>
            <ListGroup.Item>
              Hard Problems Solved: {x.hardSolved}
            </ListGroup.Item>
          </ListGroup>
        </Card>
        // <NewsItems
        //   title={x.title}
        //   description={x.description}
        //   img={x.urlToImage}
      ))}
    </>
  );
}

export default Body;
