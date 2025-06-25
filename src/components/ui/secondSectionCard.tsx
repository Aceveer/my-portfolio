import React, { ReactNode } from 'react';
import SpotlightCard from './SpotlightCard'; // Adjust path if needed

interface SecondSectionCardProps {
  icon: ReactNode;
  title: string;
  level: number;
  experience: number;
  projects: number;
  spotlightColor?: string;
}

const SecondSectionCard: React.FC<SecondSectionCardProps> = ({
  icon,
  title,
  level,
  experience,
  projects,
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  return (
    <SpotlightCard spotlightColor={spotlightColor}>
      {/* Header: Image + Title */}
    <div className="flex items-center gap-4">
        <div className="text-4xl text-green-400">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {/* Skill Level Gauge + Info */}
      <div className="flex items-center justify-between">
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="24"
              stroke="#2d2d2d"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="24"
              stroke="#4ade80"
              strokeWidth="6"
              fill="none"
              strokeDasharray={2 * Math.PI * 24}
              strokeDashoffset={(1 - level / 100) * 2 * Math.PI * 24}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
            {level}%
          </div>
        </div>

        <div className="text-right text-sm text-white space-y-1">
          <p className="font-medium">Experience: {experience} yrs</p>
          <p className="text-gray-400">Projects: {projects}+</p>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default SecondSectionCard;
