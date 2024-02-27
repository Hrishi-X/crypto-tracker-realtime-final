import { convertDate } from "./convertdate";

export function setttingChartData(setchartData, prices) {
  setchartData({
    labels: prices.map((price) => convertDate(price[0])),
    datasets: [
      {
        label: "Dataset 1",
        data: prices.map((price) => price[1]),
        borderColor: "#3a80e9",
        borderWidth: 2,
        fill: true,
        tension: 0.25,
        backgroundColor: prices ? "transparent" : "ragba(58,128,233,0.1)",

        pointRadius: 0,
      },
    ],
  });
}
