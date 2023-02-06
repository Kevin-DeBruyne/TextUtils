import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import CanvasJSReact from "./piechartfiles/canvasjs.react";
// import { PieChart } from "react-minimal-pie-chart";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Body() {
  const [Name, setName] = useState("")
  const changeHandler = (event) => {
    setName(event.target.value);
  }
  const [Array, setArray] = useState({});
  const fetchData = () => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${Name}`)
    .then((response) => response.json())
    .then((data) => setArray(data))
    .catch((error) => console.error(error));
  }
  // const peasy={Array.easySolved}
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "LeetCode Problems Pie",
    },
    data: [
      {
        type: "pie",
        startAngle: 0,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: ((Array.easySolved / Array.totalSolved) * 100).toFixed(0), label: "Easy" },
          { y: (((Array.mediumSolved / Array.totalSolved)) * 100).toFixed(0), label: "Medium" },
          { y: ((Array.hardSolved / Array.totalSolved) * 100).toFixed(0), label: "Hard" },
        ],
      },
    ],
  };
  return (
    <>
      <form>
        <label>
          <input
            placeholder="Enter username"
            onChange={changeHandler}
            type="text"
            name="name"
          />
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
      <Button
        onClick={fetchData}
        variant="outline-secondary"
        id="button-addon2"
      >
        Button
      </Button>

      <Card style={{ width: "25%" }}>
        <ListGroup variant="flush">
          {/* <ListGroup.Item>{Name}</ListGroup.Item> */}
          <ListGroup.Item>
            Total Problems Solved :{Array.totalSolved}
          </ListGroup.Item>
          <ListGroup.Item>
            Easy Problems Solved :{Array.easySolved}
          </ListGroup.Item>
          <ListGroup.Item>
            Medium Problems Solved :{Array.mediumSolved}
          </ListGroup.Item>
          <ListGroup.Item>
            Hard Problems Solved :{Array.hardSolved}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    </>
  );
}

export default Body;

