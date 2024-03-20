import { PieChart } from "@/components/admin/PieChart";
import { Stocks } from "@/components/admin/Stocks";
import React from "react";

const AdminHome = () => {
  const chennaiNorthData = {
    labels: [
      "Boiled Rice",
      "Raw Rice",
      "Ragi",
      "Sugar",
      "Wheat",
      "Toor Dal",
      "Urad Dal",
      "Palm Oil",
      "Cement",
    ],
    datasets: [
      {
        label: "Stocks in Chennai North",
        data: [8501, 14625, 0, 1561, 751, 24, 24, 28649, 30],
        backgroundColor: [
          "#0D7685",
          "#90AACB",
          "#E90064",
          "#A3C6C4",
          "#FFF4E0",
          "#F66B0E",
          "#B46060",
          "#C2F69B",
          "#4D4D4D",
        ],
      },
    ],
  };

  const chennaiSouthData = {
    labels: [
      "Boiled Rice",
      "Raw Rice",
      "Ragi",
      "Sugar",
      "Wheat",
      "Toor Dal",
      "Urad Dal",
      "Palm Oil",
      "Cement",
    ],
    datasets: [
      {
        label: "Stocks in Chennai South",
        data: [6342, 3403, 0, 1205, 1775, 304, 305, 39343, 1],
        backgroundColor: [
          "#0D7685",
          "#90AACB",
          "#E90064",
          "#A3C6C4",
          "#FFF4E0",
          "#F66B0E",
          "#B46060",
          "#C2F69B",
          "#4D4D4D",
        ],
      },
    ],
  };

  const ariyalurData = {
    labels: [
      "Boiled Rice",
      "Raw Rice",
      "Ragi",
      "Sugar",
      "Wheat",
      "Toor Dal",
      "Urad Dal",
      "Palm Oil",
      "Cement",
    ],
    datasets: [
      {
        label: "Stocks in Ariyalur",
        data: [3384, 385, 0, 616, 217, 20, 44, 64, 4374, 0],
        backgroundColor: [
          "#0D7685",
          "#EEC550",
          "#EB1D36",
          "#A3C6C4",
          "#D84C73",
          "#F66B0E",
          "#E9E5DD",
          "#A2C11C",
          "#90AEFF",
        ],
      },
    ],
  };

  return (
    <div className="p-4 overflow-y-scroll">
      <h1 className="text-xl font-semibold text-slate-800 text-center mb-5">
        Public Distribution Supplies Stock Tamil Nadu
      </h1>
      <div className="flex flex-col h-full space-y-6 md:space-x-8 w-[90%] mx-auto md:space-y-0 mb-4">
        <div className="flex flex-col space-y-5 w-[70%] items-center mx-auto mb-5">
          <Stocks />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-slate-800 text-center my-4">
            District Wise Product Distribution
          </h1>
          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
            <PieChart data={chennaiNorthData} city="Chennai - North" />
            <PieChart data={chennaiSouthData} city="Chennai - South" />
            <PieChart data={ariyalurData} city="Ariyalur" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
