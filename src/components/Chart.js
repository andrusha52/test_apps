import React from "react";
import { Line } from "react-chartjs-2";

function MyChart({ grlLine, grkLine }) {
  const foo = [...Array(81).keys()];
  let Aarray = [
    { x: 0, y: 0 },
    { x: grkLine[0] + 10, y: grkLine[0] },
    { x: grkLine[1] + 20, y: grkLine[1] },
    { x: grkLine[2] + 30, y: grkLine[2] },
    { x: grkLine[3] + 40, y: grkLine[3] },
    { x: grkLine[4] + 50, y: grkLine[4] },
    { x: grkLine[5] + 60, y: grkLine[5] },
    { x: grkLine[6] + 70, y: grkLine[6] },
  ];

  const Barray = [
    { x: 0, y: 0 },
    { x: grlLine[0] + 10, y: grlLine[0] },
    { x: grlLine[1] + 20, y: grlLine[1] },
    { x: grlLine[2] + 30, y: grlLine[2] },
    { x: grlLine[3] + 40, y: grlLine[3] },
    { x: grlLine[4] + 50, y: grlLine[4] },
    { x: grlLine[5] + 60, y: grlLine[5] },
    { x: grlLine[6] + 70, y: grlLine[6] },
  ];

  const midlNumber = (
    grlLine.reduce((acc, el) => {
      acc = acc + el;
      return acc;
    }, 0) / 7
  ).toFixed(2);

  const x = [...Array(80).keys()];
  const midlArray = x.map((el) => {
    return Object({ x: el, y: midlNumber });
  });

  const datAaa = {
    labels: [...foo],
    datasets: [
      {
        label: "Линия жизни",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(255, 0, 0,0.5)",
        borderColor: "rgba(255, 0, 0,0.5)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255, 0, 0,0.5)",
        pointHoverBorderColor: "rgba(255, 0, 0,0.5)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [...Aarray],
      },
      {
        label: "Карьера",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(0, 1, 255,0.5)",
        borderColor: "rgba(0, 1, 255,0.5)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(0, 1, 255,0.5)",
        pointHoverBorderColor: "rgba(0, 1, 255,0.5)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [...Barray],
      },
      {
        label: "midl Line",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(0, 249, 0,0.5)",
        borderColor: "rgba(0, 249, 0,0.5)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0, 249, 0,0.5)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(0, 249, 0,0.5)",
        pointHoverBorderColor: "rgba(0, 249, 0,0.5)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [...midlArray],
      },
    ],
  };
  const lineChart = (
    <div style={{ width: 2400, height: 600, marginBottom: 500 }}>
      <Line data={datAaa}/>
    </div>
  );
  return lineChart;
}

export default MyChart;
