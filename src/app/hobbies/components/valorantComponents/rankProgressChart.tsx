"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// interface MMRData {
//   name: string;
//   tag: string;
//   total_games: number;
//   total_wins: number;
//   current_rank: string;
//   highest_rank: string;
//   highest_rank_by_season: Record<string, SeasonRankData>;
// }

interface SeasonRankData {
  wins: number;
  number_of_games: number;
  final_rank_patched: string;
}
type Props = {
  ranks?: Record<string, string>;
};

const tierMap: Record<string, number> = {
  "Iron 1": 3,
  "Iron 2": 4,
  "Iron 3": 5,
  "Bronze 1": 6,
  "Bronze 2": 7,
  "Bronze 3": 8,
  "Silver 1": 9,
  "Silver 2": 10,
  "Silver 3": 11,
  "Gold 1": 12,
  "Gold 2": 13,
  "Gold 3": 14,
  "Platinum 1": 15,
  "Platinum 2": 16,
  "Platinum 3": 17,
  "Diamond 1": 18,
  "Diamond 2": 19,
  "Diamond 3": 20,
  "Ascendant 1": 21,
  "Ascendant 2": 22,
  "Ascendant 3": 23,
  "Immortal 1": 24,
  "Immortal 2": 25,
  "Immortal 3": 26,
  "Radiant": 27
};

const reverseTierMap = Object.entries(tierMap).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {} as Record<number, string>);

export default function RankProgressChart({ ranks }: Props) {
const rankProgressData = useMemo(() => {
  if (!ranks) return [];
  return Object.entries(ranks)
    .filter(([, rank]) => {
      const trimmed = rank?.trim();
      return trimmed && tierMap[trimmed];
    })
    .map(([season, rank]) => ({
      season,
      rank: tierMap[rank.trim()],
    }))
}, [ranks]);



  console.log("Ranks",ranks)
  const data = {
    labels: rankProgressData.map((point) => point.season),
    datasets: [
      {
        label: "Rank Tier",
        data: rankProgressData.map((point) => point.rank),
        fill: false,
        borderColor: "#facc15",
        tension: 0.3,
        pointBackgroundColor: "#facc15",
        pointBorderWidth: 2,
      }
    ]
  };

const options = {
  responsive: true,
  scales: {
    y: {
      title: { display: true, text: "Rank Tier" },
      beginAtZero: false,
      ticks: {
        stepSize: 1,
        color: "#fff",
        callback: function (tickValue: string | number): string {
          const value = Number(tickValue);
          return reverseTierMap[value] || "";
        }
      },
      grid: {
        color: "rgba(255,255,255,0.1)",
      }
    },
    x: {
      ticks: { color: "#fff" },
      grid: {
        color: "rgba(255,255,255,0.1)",
      }
    }
  },
  plugins: {
    legend: {
      labels: { color: "#fff" }
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          const value = context.parsed.y;
          const rankName = reverseTierMap[value] || "Unknown Rank";
          return `Rank: ${rankName}`;
        }
      }
    }
  }
};


  return (
    <div className="w-1 bg-zinc-900 p-4 rounded-xl shadow-lg mt-10">
      <h3 className="text-lg font-semibold mb-2 text-white text-center">Rank Progression</h3>
      {rankProgressData.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <p className="text-center text-gray-400">No rank data available.</p>
      )}
    </div>
  );
}
