import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

// console.log(honda);

const {
  model: hondaModel,
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  model: teslaModel,
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour]
} = tesla;

// console.log(zeroToSixty);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{teslaModel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
