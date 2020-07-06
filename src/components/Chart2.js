import React from "react";
import { Line } from "react-chartjs-2";

function MyChartSecond({  summaryValue }) {
  summaryValue= summaryValue.split("").map(el=> Number(el))
  const foo = [...Array(80).keys()];
  let Aarray = [
    { x: 0, y: 0 },
    { x: summaryValue[0] + 10, y: summaryValue[0] },
    { x: summaryValue[1] + 20, y: summaryValue[1] },
    { x: summaryValue[2] + 30, y: summaryValue[2] },
    { x: summaryValue[3] + 40, y: summaryValue[3] },
    { x: summaryValue[4] + 50, y: summaryValue[4] },
    { x: summaryValue[5] + 60, y: summaryValue[5] },
    { x: summaryValue[6] + 70, y: summaryValue[6] },
  ];


  const midlNumber = (
    summaryValue.reduce((acc, el) => {
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
        label: "MK",
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
    <div style={{ width: 2400, height: 600, marginBottom:500 }}>
      <Line data={datAaa} />
    </div>
  );
  return lineChart;
}

export default MyChartSecond;

