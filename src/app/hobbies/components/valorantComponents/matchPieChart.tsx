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
        backgroundColor: ["#22c55e", "#ef4444"], // green & red
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: false,
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
    <div className="w-44 h-44">
      <Pie data={pieChartData} options={pieChartOptions} width={176} height={176} />
    </div>
  );
}
