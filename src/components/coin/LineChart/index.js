import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, priceType, multiAxis }) {
  const option = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
      responsive: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
  };
  return <Line data={chartData} option={option} />;
}

export default LineChart;
