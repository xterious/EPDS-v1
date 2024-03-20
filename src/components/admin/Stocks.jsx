import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Stocks in TamilNadu",
    },
  },
};

const labels = [
  "Boiled Rice",
  "Raw Rice",
  "Ragi",
  "Sugar",
  "Wheat",
  "Toor Dal",
  "Urad Dal",
  "Palm Oil",
  "Cement",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Ariyalur",
      data: [3384, 385, 0, 616, 217, 20, 44, 64, 4374, 0],
      backgroundColor: "#5b5b5b",
    },
    {
      label: "Chennai - North",
      data: [8501, 14625, 0, 1561, 751, 24, 24, 28649, 30],
      backgroundColor: "#eabebe",
    },
    {
      label: "Chennai - South",
      data: [6342, 3403, 0, 1205, 1775, 304, 305, 39343, 1],
      backgroundColor: "#6BF0B2",
    },
  ],
};

export function Stocks() {
  return (
    <Bar
      options={options}
      data={data}
      className="hidden md:block bg-slate-50 rounded-md px-2"
    />
  );
}
