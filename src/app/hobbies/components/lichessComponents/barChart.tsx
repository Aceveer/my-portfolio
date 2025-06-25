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
    <div className="w-full max-w-xs mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PerformanceDonut;
