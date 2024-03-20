import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart(props) {
  return (
    <div className="flex flex-col items-center col-span-1 bg-slate-50 w-full md:w-1/4 rounded-md mt-4">
      <Pie data={props.data} />
      <h1>{props.city}</h1>
    </div>
  );
}
