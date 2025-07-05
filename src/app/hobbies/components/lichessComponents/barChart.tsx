'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  wins: number;
  draws: number;
  losses: number;
}

const PerformanceDonut = ({ wins, draws, losses }: Props) => {
  const total = wins + draws + losses;

  const data = {
    labels: ['Wins', 'Draws', 'Losses'],
    datasets: [
      {
        data: [wins, draws, losses],
        backgroundColor: ['#22c55e', '#facc15', '#ef4444'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#000',
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const val = context.raw;
            const pct = ((val / total) * 100).toFixed(1);
            return `${context.label}: ${val} (${pct}%)`;
          },
        },
      },
    },
  };

  return (
  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
    <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  </div>

  );
};

export default PerformanceDonut;
