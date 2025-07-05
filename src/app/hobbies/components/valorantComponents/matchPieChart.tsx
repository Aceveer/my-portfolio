"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

type MatchPieChartProps = {
  totalGames: number;
  totalWins: number;
};

export default function MatchPieChart({ totalGames, totalWins }: MatchPieChartProps) {
  const totalLosses = totalGames - totalWins;

  const pieChartData = {
    labels: ["Wins", "Losses"],
    datasets: [
      {
        data: [totalWins, totalLosses],
        backgroundColor: ["#87FF65", "#ED6A5A"], // green & red
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="w-22 h-22 lg:w-44 lg:h-44 text-sm lg:text-base">
      <Pie data={pieChartData} options={pieChartOptions} />
    </div>
  );
}
